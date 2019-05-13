#!/bin/bash
# execute under the project dir!

case $1 in 
    "start") 
    gunicorn -c /Users/ahaii/Python/blog/gunicorn_dev_conf.py blog.wsgi:application
    if [[ $? = 0 ]];then
        sleep 3
        PID=$(cat /tmp/gunicorn.pid)
        echo "Gunicorn start OK! PID is $PID"
    else
        echo "Gunicorn start false!"
    fi
    ;;
    "reload")
    gunicorn -c /Users/ahaii/Python/blog/gunicorn_dev_conf.py blog.wsgi:application --reload
    if [[ $? = 0 ]];then
        echo "Gunicorn reload OK!"
    else
        echo "Gunicorn reload False!"
    fi
    ;;
    "stop")
    kill $(cat /tmp/gunicorn.pid)
    if [[ $? = 0 ]];then
        sleep 1
        echo "Gunicorn stop OK!"
    else
        echo "Guncicorn stop False! No PID file found!"
    fi
    ;;
    *)
    echo "use [start|stop|reload]" 
esac
