# Metric Logging System

This is a lightweight server built with node/expresss. It is a metric logging and reporting service that sums metrics by time window for the most
recent hour. The app is hosted on Heroku.

Also, test cases have been added to validate that the system works as expected in different scenerios. Test cases are written in Jest.

The two APIs implemented are 

```
POST /metric/{key}
{
  "value": 30
}
```

```
GET /metric/{key}/sum
```

See swagger documentation link below

https://dcs-metric-system.herokuapp.com/api-docs/
