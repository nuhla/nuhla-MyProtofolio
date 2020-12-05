FROM python:latest
WORKDIR .
COPY requirements.txt .
RUN pip3 install --upgrade pip -r requirements.txt
COPY . .
# EXPOSE 8000
CMD python /backend/manage.py collectstatic
# CMD ["gunicorn", "--bind",":800","--workers","3","/backend/backend.wsgi.application"]
CMD python3 /backend/manage.py runserver --bind 0.0.0.0:$PORT
