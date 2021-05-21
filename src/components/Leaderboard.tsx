import React from "react"
import axios from "axios"

class Leaderboard extends React.Component {

    state = {
        gotData: false,
        leaderBoard: []
    }

    componentDidMount() {
        axios.get(`${process.env.REACT_APP_BACKEND_URL}/users/leaderboard`).then(data => {
            this.setState({gotData: true, leaderBoard: data.data})
        })
    }
    
    render() {
        return (
            <section className="container-fluid leaderboard">
                
		 <section className="is-bold mx-auto">
					<div className="bg-warning  py-2 mt-5 rounded mx-auto">
						<h1 className="title text-uppercase text-center mx-auto">Leaderboard</h1>
					</div>
				</section>
                    { !this.state.gotData ? <h1 className="leaderboard_loader">Loading....</h1> : 
                       
                        <table className="table table-hover table-bordered table-dark mx-auto is-fullwidth">
                        <thead>
                            <tr>
                                <th className = "text-warning">Sr. No</th>
                                <th className = "text-warning">Name of the User</th>
                                <th className = "text-warning">Total Profit</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.leaderBoard.map((user, index) => {
                                    if(index < 10) {
                                        return (
                                            <tr key={user.creator}>
                                                <td> {index+1} </td>
                                                <td> {user.name.toUpperCase()} </td>
                                                <td> $ {user.profitLoss} </td>
                                            </tr>
                                        )
                                    }
                                })
                            }
                        </tbody>
                        </table>
                    }
                
            </section>
        )
    }
}

export default Leaderboard
