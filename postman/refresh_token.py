import datetime
import requests

class Refresh:

    def __init__(self):
        self.access_token = ''
        self.refresh_token = 'AQBq30Nk8ub5gwctGQlyAs-1e9qoNuoS3bPo58j5AE_4TX25CSztcfV_XAhe9BACKp_4Og2HU8KugH6UNuEOPySgvpm3zN0WtnkdB5PX7v96YqjpkBqIiIK_VgZioKC3v4k'
        self.base_64 = 'NTA1YjE5NDJlNzUzNDBlOWI3M2Q0MGZmYzk4OTA1MjI6ZGY5ODgxYTAzY2M0NDMwNTkzMjdlODAwYmU0Y2I5M2E='
        self.access_token_expires = datetime.datetime.now()

    def refresh(self):
        query = "https://accounts.spotify.com/api/token"
        response = requests.post(query,
                                 data={"grant_type": "refresh_token",
                                       "refresh_token": self.refresh_token},
                                 headers={"Authorization": "Basic " + self.base_64})

        response_json = response.json()
        now = datetime.datetime.now()
        expires_in = response_json['expires_in']
        self.access_token_expires = datetime.timedelta(seconds=expires_in) + now
        self.access_token = response_json['access_token']
        return self.access_token

    def get_access_token(self):
        now = datetime.datetime.now()
        if self.access_token_expires <= now:
            return self.refresh()
        return self.access_token



refresh = Refresh()
spotify_token = refresh.get_access_token()
print(spotify_token)