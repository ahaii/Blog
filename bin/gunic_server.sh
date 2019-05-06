#!/bin/bash
# execute under the project dir!
case $1 in 
    "start") 
    gunicorn -c /Users/ahaii/Python/blog/gunicorn_conf.py blog.wsgi:application
    if [ $? = 0 ];then 
        PID=$(cat /tmp/gunicorn.pid)
        echo "Gunicorn start OK! PID is $PID"
    else
        echo "Gunicorn start false!"
    fi
    ;;
    "restart")
    gunicorn -c /Users/ahaii/Python/blog/gunicorn_conf.py blog.wsgi:application --reload
    ;;
    "stop")
    kill $(cat /tmp/gunicorn.pid)
    ;;
    *)
    echo "use start|stop|restart" 
esac
