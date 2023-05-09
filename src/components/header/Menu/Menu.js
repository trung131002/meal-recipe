import React, { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import './menu.css'

const Menu = () => {
    const [hover, setHover] = useState(false)
    const [categorys, setCategorys] = useState([])
    const [mealArea, setMealArea] = useState([])
    const [mealIngredient, setMealIngredient] = useState([])

    const [searchValue, setSearchValue] = useState('')
    const [searchResult, setSearchResult] = useState([])

    const inputRef = useRef()

    const hanldeChange = (e) => {
        if (!searchValue.startsWith(' ')) {
            setSearchValue(searchValue)
        }
        setSearchValue(e.target.value)
    }

    const apiCategorys = 'https://www.themealdb.com/api/json/v1/1/list.php?c=list'
    const apiArea = 'https://www.themealdb.com/api/json/v1/1/list.php?a=list'
    const apiIngredient = 'https://www.themealdb.com/api/json/v1/1/list.php?i=list'

    useEffect(() => {
        const getCategorys = async () => {
            const response = await fetch(apiCategorys)
            const data = await response.json()
            setCategorys(data.meals)
        }
        getCategorys()

        const getMealArea = async () => {
            const response = await fetch(apiArea)
            const data = await response.json()
            setMealArea(data.meals)
        }
        getMealArea()

        const getMealIngredient = async () => {
            const response = await fetch(apiIngredient)
            const data = await response.json()
            setMealIngredient(data.meals)
        }
        getMealIngredient()
    }, [])

    useEffect(() => {
        const getSearchResult = async () => {
            const response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchValue}`)
            const data = await response.json()
            setSearchResult(data.meals)
        }
        getSearchResult()
    }, [searchValue])

    const handleHover = () => {
        setHover(!hover)
    }

    const handleClose = () => {
        document.querySelector('.search-box').style.display = 'none'
        setSearchResult([])
        setSearchValue('')
    }

    const handleOpen = () => {
        document.querySelector('.search-box').style.display = 'block'
        inputRef.current.focus()
    }

    return (
        <div className="menu">
            <div>
                <ul>
                    <div className="list">
                        <li className="menu-item">
                            <span className="category">Category</span>
                            <i className="fa-solid fa-caret-down"></i>
                        </li>
                        <div className="list-group">
                            {categorys.map((category, index) => (
                                <li key={index}>
                                    <Link className="list-item" to={`/category/${category.strCategory}`}>
                                        {category.strCategory}
                                    </Link>
                                </li>
                            ))}
                        </div>
                    </div>
                    <div className="list">
                        <li className="menu-item">
                            <span className="category">Area</span>
                            <i className="fa-solid fa-caret-down"></i>
                        </li>
                        <div className="list-group">
                            {mealArea.map((area, index) => (
                                <li key={index}>
                                    <Link className="list-item" tp={`/area/${area.strArea}`}>
                                        {area.strArea}
                                    </Link>
                                </li>
                            ))}
                        </div>
                    </div>
                    <div className="list">
                        <li className="menu-item">
                            <span className="category">Ingredient</span>
                            <i className="fa-solid fa-caret-down"></i>
                        </li>
                        <div className="list-group">
                            {mealIngredient.map((ingredient, index) => (
                                <li key={index}>
                                    <Link className="list-item" to={`/ingredient/${ingredient.strIngredient}`}>
                                        {ingredient.strIngredient}
                                    </Link>
                                </li>
                            ))}
                        </div>
                    </div>
                </ul>
            </div>
            <div className="support">
                <div onMouseEnter={handleHover} onMouseLeave={handleHover}>
                    {hover ? <i className="fa-solid fa-heart icon"></i> : <i className="fa-regular fa-heart icon"></i>}
                </div>
                <div onClick={handleOpen} className="search">
                    <i className="fa-solid fa-search icon"></i>
                </div>
                <div className="search-box">
                    <i className="search-box-icon fa-solid fa-search"></i>
                    <input
                        onChange={hanldeChange}
                        ref={inputRef}
                        value={searchValue}
                        placeholder="Search the site..."
                    />
                    <i onClick={handleClose} className="search-box-icon fa-solid fa-x"></i>
                </div>
                <div className="meal">
                    {searchValue && searchResult && (
                        <div className="meal-item-list">
                            {searchResult.map((meal, index) => (
                                <Link key={index} to={`/meal/${meal.strMeal}`}>
                                    <div className="meal-item">
                                        <img src={meal.strMealThumb} alt={meal.strMeal} />
                                        <span>{meal.strMeal}</span>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}

export default Menu
