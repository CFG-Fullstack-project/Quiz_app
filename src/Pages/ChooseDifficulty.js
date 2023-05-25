import React, { useState, useEffect } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import LogoHeader from '../logos/LogoHeader'

function ChooseDifficulty() {
    const location = useLocation()
    const category = location.state
    const navigate = useNavigate()
    const [difficulty, setDifficulty] = useState(null)


    const handleChooseDifficulty = (e) => {
        const option = e.target.innerText
        switch (option) {
            case 'Easy':
                setDifficulty('easy')
                break
            case 'Medium':
                setDifficulty('medium')
                break
            case 'Advanced':
                setDifficulty('hard')
                break
            default:
                return difficulty
        }
    }

    useEffect(() => {
        if (difficulty !== null) {
          console.log(category);
          navigate('quiz', {state: {category: category, difficulty: difficulty}});
        }
      }, [category, difficulty, navigate]);

  return (
    <>
    <LogoHeader/>
    <div>

        <h3>Choose Difficulty</h3>
        <div>
            <button onClick={handleChooseDifficulty}>Easy</button>
            <p/>
            <button onClick={handleChooseDifficulty}>Medium</button>
            <p/>
            <button onClick={handleChooseDifficulty}>Advanced</button>             
        </div>
    </div>
    </>
  )
}

export default ChooseDifficulty