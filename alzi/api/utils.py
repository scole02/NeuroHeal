from pymongo import MongoClient
def get_db_handle(db_uri):

 client = MongoClient(db_uri)
 db_handle = client['db_name']
 return db_handle, client