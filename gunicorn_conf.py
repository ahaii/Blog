from gevent import monkey
monkey.patch_all()
import multiprocessing
debug = True
daemon = True
loglevel = 'debug'
bind = '127.0.0.1:8080'
pidfile = '/data/logs/gunicorn/gunicorn.pid'
logfile = '/data/logs/gunicorn/gunicorn.log'
workers = multiprocessing.cpu_count() * 2 + 1
worker_class = 'gevent'
