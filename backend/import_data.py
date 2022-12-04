#!/usr/bin/env python

import csv
import sys
from fastapi.encoders import jsonable_encoder
import certifi

# dotenv environment variables
from dotenv import dotenv_values
from models import VenueBase

config = dotenv_values(".env")
collection = sys.argv[1]
filename = "../data/{}.csv".format(collection)

# read csv
with open(filename, encoding='utf-8') as f:
    csv_reader = csv.DictReader(f)
    name_records = list(csv_reader)

# Mongo db - we do not need Motor here
from pymongo import MongoClient
client = MongoClient()

client = MongoClient(config['DB_URL'], tlsCAFile=certifi.where())
db = client[config['DB_NAME']]
db_collection = db[collection]

match collection:

    case "venues":
        print("Delete all records in {}".format(collection))
        db_collection.delete_many({})
        for rec in name_records:
            try:
                rec['legacyId'] = int(rec['legacyId'])
                rec['latitude'] = float(rec['latitude'])
                rec['longitude'] = float(rec['longitude'])
                rec['active'] = bool(rec['active'])

                venue = jsonable_encoder(VenueBase(**rec))  
                print("Inserting: ", venue)
                db_collection.insert_one(venue)

            except ValueError as e:
                print(e)

    case _:
        print("Unknown parameter value!")
