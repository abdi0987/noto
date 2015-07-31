angular.module('app')
.factory('$todo',function($http,$resource){
    var storeData;
    return $resource('/todo/:todoId', { todoId:'@_id' },{
    update: {
      method: 'PUT' // this method issues a PUT request
    }
  });
})