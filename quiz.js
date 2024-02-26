import React from "react";
import Question from "../questions/question";
import Option from "../option/option";
import './quiz.css'
import End from "../End/end";
import Score from "../score/score";

class Quiz extends React.Component{
    constructor(props){
        super(props);
        this.state={
            questions:{
                1: 'What is the color of sky ________',
                2: 'what is the color of apple ______',
                3: 'html used to create _______ webpage',
                4: 'css used to ______ webpage',
                5: 'Facebook invented ______ library'

            },
            options:{
                1:{
                    1: 'blue',
                    2: 'red',
                    3: 'green',
                    4: 'yellow'
                },
                2:{
                    1: 'blue',
                    2: 'red',
                    3: 'green',
                    4: 'yellow'
                },
                3:{
                    1: 'style',
                    2: 'structure',
                    3: 'interaction',
                    4: 'library'
                },
                4:{
                    1: 'style',
                    2: 'structure',
                    3: 'interaction',
                    4: 'library'
                },
                5:{
                    1: 'style',
                    2: 'structure',
                    3: 'interaction',
                    4: 'React'
                }

            },
            correctOptions:{
                1: '1',
                2: '2',
                3: '2',
                4: '1',
                5: '4'

            },
            correctOption:0,
            clickedOption:0,
            step:1,
            score:0,
            result:0,
            viewresult:0
        }

    }
    checkOption = (opt)=>{
        if (opt === this.state.correctOptions[this.state.step]){
            this.setState({
                score : this.state.score+1,
                correctOption:this.state.correctOptions[this.state.step],
                clickedOption: opt,
                result: 1
            })
        }else{
            this.setState({
                correctOption: 0,
                clickedOption: opt,
                result : 1

            });
        }

    }
    Next = (step)=>{
        this.setState({
            step : step+1,
            correctOption:0,
            clickedOption :0,
            result: 0
        })

    }
    handleClick=()=>{
        this.setState({
            viewresult : 1

        })
    }
    render() {
        return (
        <div>{
            this.state.step <= Object.keys(this.state.questions).length ?
            <div className="Quizapp">
                <Question q={this.state.questions[this.state.step]} qno={this.state.step} total={Object.keys(this.state.questions).length} />
                <Option opt={this.state.options[this.state.step]} 
                clickevent = {this.checkOption} correctOption={this.state.correctOption}  clickedOption={this.state.clickedOption} result=
                {this.state.result} />
                <button className="nxt" disabled={this.state.clickedOption ? false : true} onClick={()=>{
                    this.Next(this.state.step)
                }}>Next</button>
            </div> :
            this.state.viewresult ?
                (
                    <Score score = {this.state.score} total={Object.keys(this.state.questions).length} />

                )
            :(
                <End click={()=>this.handleClick()} />
            )
            

        }
        </div>
            
        );
    }
}

export default Quiz;