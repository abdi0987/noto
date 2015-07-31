angular.module('app')
.controller('MainController',function($scope,$todo){
    $scope.todos = [];
    $scope.data = {};
    $scope.text = ''
    $scope.clearIcon = false;
    
    $scope.checkIcon = function(){
        $todo.query(function(response){
            $scope.data = response;
            var count = 0;
            for(var i=0;i<$scope.data.length;i++){
                if($scope.data[i].completed == true){
                    $scope.clearIcon = true;
                    count++;
                }
            }
            
            if(count == 0){
                $scope.clearIcon = false;
            }
        });
    }
    
    $scope.getTodos = function(){
        $todo.query(function(response){
            $scope.todos = response;
            $scope.checkIcon()
        });
    }; 
    
    $scope.getTodos();


    $scope.addTodo = function() {
        $todo.save({
            text:$scope.text,
            completed:false
        },function(){
           $scope.text = '';
           $scope.getTodos()
        })
    }
    
    $scope.deleteTodo = function(todoId){
        $todo.delete({todoId:todoId}, function() {
            $scope.getTodos();
        });   
    }
    
    $scope.updateTodo = function(todo){
        
        todo.completed = !todo.completed;

        $todo.update({todoId:todo._id},{
            text: todo.text, 
            completed: todo.completed
        },function(){
            $scope.checkIcon()
        });
    }
    
    $scope.clearAll = function(){
         $todo.delete(function() {
            $scope.getTodos();
        });     
    }
    
})