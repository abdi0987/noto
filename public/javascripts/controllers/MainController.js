angular.module('app')
.controller('MainController',function($scope,$todo){
    $scope.todos = [];
    $scope.text = ''
    
    $scope.getTodos = function(){
        $todo.query(function(response){
            $scope.todos = response;
        });
    }; 
    
    $scope.getTodos()
    
    
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
        });
    }
})