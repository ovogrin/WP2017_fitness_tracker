import * as $ from 'jquery'

//Class to keep exercises
export class Exercises{
    text: string
}

//Class to create users
export class User{

}

export class AvExercises{
    name: "otto";
    exercises: Exercises[] = [];

    drawExercises(){
        $("#avExercisesList").html(
            this.exercises.map( x => `<li class="list-group-item"><a href="#">${x.text}</a></li>`).join("")
        );
    }
}


export class MyExercises{
    exercises: Exercises[] = [];

    // Draws the selected exercise from Available Exercises
    // into My Exercises but it does not remove it from the
    // previous list.
    drawExercises2(){
        $("#avExercisesList > li").click(function (){
            let curExer = $(this);
            $("#myExercisesList").append(curExer.clone());
        });
    }
    
    // Moves the selected exercise from the Available Exercises
    // into My Exercises.
    drawExercises(){
        $("#avExercisesList > li").click(function (){
            let curExerc = this;
            $("#myExercisesList").append(curExerc);
        });
   }
}

export class ExerciseInfo{
    exercise = new Exercises();
    
    drawExercises(){
        $("#avExercisesList > li").click(function (){
            let curExerc = this;
            $("#exerciseInfo").append(curExerc);

            $("#addExercises").click(function(){
                let chosenExerc = $("#exerciseInfo > li");
                $("#myExercisesList").append(chosenExerc);
            });
            $("#removeExercises").click(function(){
                let chosenExerc = $("#exerciseInfo > li");
                $("#avExercisesList").append(chosenExerc);
            });

        });
    }
}

export class App{
    avExercises: AvExercises[] = [];
    exercises: Exercises[] = [];

    init() {
        return $.when(
            $.getJSON("/game/quotes").done( data =>{
                this.exercises = data;
            })
        );
    }
}

// Controller

const app = new App();
const avExerc = new AvExercises();
const myExerc = new MyExercises();
const exercInfo = new ExerciseInfo();

app.init().done(()=>{
    avExerc.exercises = app.exercises;
    avExerc.drawExercises();
    exercInfo.drawExercises();
});




