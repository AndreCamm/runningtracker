import React from "react"
import "./Main.css"

const Main = () => {
    let entries = []
    const goal = 25

    const addNewEntry = (newEntry) => {
        const entriesWrapper = document.querySelector("#entries")
        entriesWrapper.removeChild(entriesWrapper.firstElementChild)
        const listItem = document.createElement("li")
        const listValue = document.createTextNode(newEntry.toFixed(1))
        listItem.appendChild(listValue)

        entriesWrapper.appendChild(listItem)
    }

    const reducer = (total, currentValue) => {
        return total + currentValue
    }

    const calcTotal = (entries) => {
        const totalValue = entries.reduce(reducer).toFixed(1)
        document.getElementById("total").innerText = totalValue
        document.getElementById("progressTotal").innerText = totalValue
    }

    const calcAverage = () => {
        const average = (entries.reduce(reducer) / entries.length).toFixed(1)
        document.getElementById("average").innerText = average
    }

    const weeklyHigh = () => {
        const high = Math.max(...entries)
        document.getElementById("high").innerText = high
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const entry = Number(document.querySelector("#entry").value)
        if (!entry) return
        document.querySelector("form").reset()
        entries.push(entry)
        addNewEntry(entry)
        calcTotal(entries)
        calcAverage(entries)
        weeklyHigh()
        document.querySelector("#target").innerText = goal
        calcGoal()
    }

    const calcGoal = () => {
        const totalValue = entries.reduce(reducer).toFixed(1)
        const completedPercent = totalValue / (goal / 100)
        const progressCircle = document.querySelector("#progressCircle")
        progressCircle.style.background = `conic-gradient(#70db70 ${completedPercent}%, #2d3540 ${completedPercent}% 100%)`
    }

    return (
        <div>
            <div className="logo">
                <svg
                    viewBox="0 0 383 367"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M288.603 64.462C306.387 64.462 320.81 49.991 320.81 32.207C320.81 14.423 306.388 0 288.603 0C270.77 0 256.348 14.422 256.348 32.207C256.348 49.991 270.77 64.462 288.603 64.462Z"
                        fill="gray"
                    />
                    <path
                        d="M177.603 88.382L127.466 146.315C124.494 149.969 120.011 152.211 114.944 152.211C105.979 152.211 98.7194 144.951 98.7194 136.034C98.7194 131.162 100.814 126.825 104.176 123.853L158.26 61.584C161.232 58.027 165.715 55.737 170.782 55.737L249.033 55.688C254.783 55.688 259.947 58.027 263.748 61.681L313.641 111.575L355.008 70.305C357.932 67.82 361.684 66.358 365.776 66.358C375.034 66.358 382.489 73.862 382.489 83.12C382.489 87.164 381.124 90.818 378.737 93.742L328.892 143.976C313.739 159.081 301.558 146.266 301.558 146.266L270.959 115.521L223.161 170.823L266.964 214.626C266.964 214.626 276.221 223.202 270.91 240.255L246.353 349.735C244.404 359.237 236.024 366.399 225.987 366.399C214.439 366.399 205.133 357.044 205.133 345.545C205.133 343.694 205.328 341.94 205.766 340.283L225.987 250.484L176.19 202.101L133.362 249.851C133.362 249.851 126.443 258.378 108.074 257.744L21.1994 257.89C11.5034 258.037 2.68437 251.41 0.540366 241.568C-2.04263 230.361 4.87637 219.349 16.1314 216.865C17.8864 216.475 19.6404 216.329 21.3454 216.377L96.0394 216.572L206.499 88.522L177.605 88.376L177.603 88.382Z"
                        fill="gray"
                    />
                </svg>
            </div>
            <form onSubmit={handleSubmit}>
                <label for="entry"> Number of miles today</label>
                <br />
                <input type="number" id="entry" step="0.1"></input>
                <br />
                <button type="submit">Add</button>
            </form>
            <hr></hr>

            <section className="entriesWrapper">
                <h3>Last 7 days</h3>
                <ul id="entries">
                    <li>-</li>
                    <li>-</li>
                    <li>-</li>
                    <li>-</li>
                    <li>-</li>
                    <li>-</li>
                    <li>-</li>
                </ul>
            </section>
            <section className="data">
                <div>
                    <p>Total:</p>
                    <span id="total">0</span>
                </div>
                <div>
                    <p>Average distance</p>
                    <span id="average">0</span>
                </div>
                <div>
                    <p>This weeks high</p>
                    <span id="high">0</span>
                </div>
            </section>

            <section className="progress">
                <h3>
                    Weekly target: <span id="progressTotal">0</span>/{" "}
                    <span id="target"></span> miles
                </h3>
                <div className="progressCircleWrapper">
                    <div id="progressCircle">
                        <div id="progressCenter"></div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Main
