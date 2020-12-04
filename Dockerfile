FROM python:latest
WORKDIR .
COPY requirements.txt .
RUN pip3 install --upgrade pip -r requirements.txt
COPY . .
EXPOSE 8000
CMD python /backend/manage.py collectstatic
CMD python3 /backend/manage.py runserver 0.0.0.0:8000
