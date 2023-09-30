var app=angular.module("myApp",[]);
    app.controller("myCont",function($scope){
        $scope.fonts=["'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif","'Courier New', Courier, monospace","'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif","'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif","'Segoe UI', Tahoma, Geneva, Verdana, sans-serif","'Times New Roman', Times, serif","'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif","Arial, Helvetica, sans-serif","Cambria, Cochin, Georgia, Times, 'Times New Roman', serif","Georgia, 'Times New Roman', Times, serif","Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif","Verdana, Geneva, Tahoma, sans-serif","cursive","fantasy","monospace","sans-serif","system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif","inherit","initial","unset"]
        $scope.ret=true
        $scope.count=20
        $scope.size=100
        $scope.color1="#000000"
        $scope.fName="Darshan"
        $scope.lName="Jingade"
        $scope.reset=function(){
            $scope.fName="First Name"
            $scope.lName="Last Name"
            $scope.color1="#000000"
            $scope.ret=false
            $scope.count=20
            $scope.size=100
        }
        $scope.ch=function(){
            $scope.ret=true
        }
        $scope.col=function(){
            document.getElementById("h1tag").style.color = $scope.color1;
        }
        $scope.plus=function(){
            $scope.count+=1 
            if ($scope.count==21){
                $scope.count=0
            }
            $scope.sty();
        }
        $scope.minus=function(){
            $scope.count-=1
            if ($scope.count==-1){
                $scope.count=20
            }
            $scope.sty();
        }
        $scope.sty=function(){  
            document.getElementById("h1tag").style.fontFamily = $scope.fonts[$scope.count];
        }
        $scope.add=function(){
            $scope.size+=10 
            $scope.siz();
        }
        $scope.sub=function(){
            $scope.size-=10
            $scope.siz();
        }
        $scope.siz=function(){  
            document.getElementById("h1tag").style.fontSize = $scope.size +'%';
        }

    })