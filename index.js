

var MemLog = require('flumelog-memory')
var Reduce = require('flumeview-reduce')
var Flume = require('flumedb')
var FlumeCli = require('flumecli')
var path = require('path')

var statistics = require('statistics')

var db = Flume(MemLog(path.join(process.cwd(), '.flume', 'log.jsondld')))
  .use('stats', Reduce(function (acc, item) {
    if(!isNaN(item.sample))
      return statistics(acc, item.sample)
    return acc
  }))

if(!module.parent) FlumeCli(db)






