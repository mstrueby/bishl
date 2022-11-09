from bson import ObjectId
from pydantic import Field, BaseModel
from typing import Optional

class PyObjectId(ObjectId):
    @classmethod
    def __get_validators__(cls):
        yield cls.validate

    @classmethod
    def validate(cls, v):
        if not ObjectId.is_valid(v):
            raise ValueError("Invalid objectid")
        return ObjectId(v)

    @classmethod
    def __modify_schema__(cls, field_schema):
        field_schema.update(type="string")

class MongoBaseModel(BaseModel):
    id: PyObjectId = Field(default_factory=PyObjectId, alias="_id")

    class Config:
        json_encoders = {ObjectId: str}

class VenueBase(MongoBaseModel):
    name: str = Field(...)
    shortName: str = Field(...)
    street: str = Field(...)
    zipCode: int = Field(...)
    city: str = Field(...)
    country: str = Field(...)
    latitude: float = Field(...)
    longitude: float = Field(...)
    image: str = None
    description: str = None
    active: bool = False
    legacyId: int = None

class ClubBase(MongoBaseModel):
    pass

class VenueUpdate(MongoBaseModel):
    name: Optional[str] = None
    shortName: Optional[str] = None
    street: Optional[str] = None
    zipCode: Optional[int] = None
    city: Optional[str] = None
    country: Optional[str] = None
    latitude: Optional[float] = None
    longitude: Optional[float] = None
    image: Optional[str] = None
    description: Optional[str] = None
    active: Optional[bool] = None

class VenueDB(VenueBase):
    pass