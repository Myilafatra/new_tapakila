import React from 'react'


const Place = props =>(
	<div className="row">
	
		<div class="col-md-6">
		
		<table className="table">
		
			{props.users.length > 0?(
				props.users.map(user =>(

				<div key={user.id} className="place">
				<h1>PLACES: {user.place}</h1>
					<tr>
						<td colspan="2" class="td"><b>CHAUFFEUR</b></td>
						<td id="place1" className="td"></td>
						<td id="place2"className="td"></td>
					</tr>
					<tr>
						<td id="place3"className="td"></td>
						<td id="place4"className="td"></td>
						<td id="place5"className="td"></td>
						<td id="place6"className="td"></td>
					</tr>
					<tr>
						<td id="place7"className="td"></td>
						<td id="place8"className="td"></td>
						<td id="place9"className="td"></td>
						<td id="place10"className="td"></td>
					</tr>
					<tr>
						<td id="place11"className="td"></td>
						<td id="place12"className="td"></td>
						<td id="place13"className="td"></td>
						<td id="place14"className="td"></td>
					</tr>
					<tr>
						<td id="place15"className="td"></td>
						<td id="place16"className="td"></td>
						<td id="place17"className="td"></td>
						<td id="place18"className="td"></td>
					</tr>
					<tr>
						<td id="place19"className="td"></td>
						<td id="place20"className="td"></td>
						<td id="place21"className="td"></td>
						<td id="place22"className="td"></td>
					</tr> <br/>
				</div>			
					))

			):(
				<tr></tr>
			)	}
			
		</table>
		</div>
		
	</div>
		
	
)
export default Place