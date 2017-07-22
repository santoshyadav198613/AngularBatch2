angular.module("myApp").service('cacheService', function ($cacheFactory) {
var cacheObject=[];
var cache;

var service;

service = {
    createCache : createCache,
    getCache : getCache,
    saveCache : saveCache
}

return service;

function createCache(name)
{   cache =  $cacheFactory(name);
    return cache;
}

function getCache(key)
{
    return cache.get(key);
}

function saveCache(key,value)
{
  return cache.put(key,value)
}

function removeCache(key)
{
    return cache.remove(key);
}

function clearCache()
{
    return cache.removaAll();
}

});