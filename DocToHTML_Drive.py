import io
import os

import webbrowser
from googleapiclient.discovery import build
from googleapiclient.errors import HttpError
from googleapiclient.http import MediaIoBaseDownload
from google.auth.transport.requests import Request
from google.oauth2.credentials import Credentials
from google_auth_oauthlib.flow import InstalledAppFlow

SCOPES = ["https://www.googleapis.com/auth/drive.readonly"]

DOCUMENT_ID = "1FKiFgoqu_l7W7cBedDxXQO4P65SsibpmXWt9q4kmAkY"

PDF = "application/pdf"

MD = "text/markdown"

PDF_PATH = "Documentacion/GDD.pdf"

MD_PATH = "Documentacion/GDD.md"

def setup_browser():
  path = os.environ["CHROME_PATH"]
  webbrowser.register("chrome",None, webbrowser.BackgroundBrowser(path))



def download_file(real_file_id,export_type):

  creds = None
  # The file token.json stores the user's access and refresh tokens, and is
  # created automatically when the authorization flow completes for the first
  # time.
  if os.path.exists("token.json"):
    creds = Credentials.from_authorized_user_file("token.json", SCOPES)
  # If there are no (valid) credentials available, let the user log in.
  if not creds or not creds.valid:
    if creds and creds.expired and creds.refresh_token:
      creds.refresh(Request())
    else:
      flow = InstalledAppFlow.from_client_secrets_file(
          "credential.json", SCOPES
      )
      creds = flow.run_local_server(port=0)
    # Save the credentials for the next run
    with open("token.json", "w") as token:
      token.write(creds.to_json())

  try:
    # create drive api client
    service = build("drive", "v3", credentials=creds)

    # file_id = real_file_id

    # pylint: disable=maybe-no-member
    request = service.files().export_media(fileId=DOCUMENT_ID,mimeType = export_type)
    file = io.BytesIO()
    downloader = MediaIoBaseDownload(file, request)
    done = False
    while done is False:
      status, done = downloader.next_chunk()
      print(f"Download {int(status.progress() * 100)}.")

  except HttpError as error:
    print(f"An error occurred: {error}")
    file = None

  return file.getvalue()



if __name__ == "__main__":
  setup_browser()
  content = download_file(DOCUMENT_ID,PDF)
  with open(PDF_PATH,"wb") as blank:
    blank.write(content); 

  content = download_file(DOCUMENT_ID,MD)
  with open(MD_PATH,"wb") as blank:
    blank.write(content)

