import { createSlice, nanoid } from "@reduxjs/toolkit";

const todoSlice=createSlice({
    name:'todoSlice',

    initialState:{
        
        all:[],
        active:[],
        completed:[],
        items:0
    },
    reducers:{
        updateAll:(state,action)=>{
            
            let tasknstat={
                id:nanoid(10),
                task:action.payload,
                status:false
            }
            state.items++;
            // console.log(tasknstat.task+" "+tasknstat.id);
            state.all.push(tasknstat);

            state.active=[]
            state.all.map((tasks)=>{
                if(tasks.status==false){
                    state.active.push(tasks.task)
                }
            })

            state.completed=[]
            state.all.map(tasks=>{
                if(tasks.status==true){
                    state.completed.push(tasks.task)
                }
            })
            

        },
        updateStatus:(state,action)=>{

            for(let i=0;i<state.all.length;i++){
                if(state.all[i].id==action.payload && state.all[i].status==false){
                    // console.log(action.payload);
                    state.all[i].status=true;
                }
                else if(state.all[i].id==action.payload && state.all[i].status==true){
                    state.all[i].status=false;
                }
            }

            state.active=[]
            state.all.map((tasks)=>{
                if(tasks.status==false){
                    state.active.push(tasks.task)
                }
            })

            state.completed=[]
            state.all.map(tasks=>{
                if(tasks.status==true){
                    state.completed.push(tasks.task)
                }
            })
        },
        deleteTodo:(state,action)=>{
            state.all=[]
            state.active=[]
            state.completed=[]
        }


    }


    
})

export default todoSlice.reducer;

export const {updateAll,updateStatus,deleteTodo}=todoSlice.actions;