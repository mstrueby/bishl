import csv
from fastapi.encoders import jsonable_encoder
import certifi

# dotenv environment variables
from dotenv import dotenv_values
from models import VenueBase

config = dotenv_values(".env")

# read csv
with open("../data/venues.csv",encoding='utf-8') as f:
    csv_reader = csv.DictReader(f)
    name_records = list(csv_reader)

# Mongo db - we do not need Motor here
from pymongo import MongoClient
client = MongoClient()

client = MongoClient(config['DB_URL'], tlsCAFile=certifi.where())
db = client[config['DB_NAME']]
#cars = db[config['COLLECTION_NAME']]
venues = db[config['COLLECTION_NAME']]


#for rec in name_records[51:250]:
for rec in name_records:

    try:
        rec['legacyId'] = int(rec['legacyId'])
        rec['latitude'] = float(rec['latitude'])
        rec['longitude'] = float(rec['longitude'])
        rec['active'] = bool(rec['active'])

        venue = jsonable_encoder(VenueBase(**rec))  
        print("Inserting: ",venue)
        venues.insert_one(venue)

    except ValueError as e:
        print(e)
