import React from 'react'

const TransactionList = () => {
  return (
    <>
        <h3>History</h3>
        <ul class="list">
            <li className="minus">
                Cash <span>-$400</span><button className="delete-btn">x</button>
            </li>
      </ul>
    </>
  )
}

export default TransactionList
