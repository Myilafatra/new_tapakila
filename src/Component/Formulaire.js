import React, { useState } from 'react'

const AddUserForm = props => {
	const initialFormState = { nom: '', prenom: '', numero: '', place: '', avance: '', reste: '', heure: '' }
	const [ user, setUser ] = useState(initialFormState)

	const handleInputChange = event => {
		const { name, value } = event.target

		setUser({ ...user, [name]: value })
	}

	return (
			
    <div>
        <form className="formulaire" onSubmit={event => {
            event.preventDefault()
            if (user.nom && user.prenom && user.numero && user.place && user.avance && user.reste && user.heure ) {
        console.log("ok");
            
            if (user.place == 1) {
                document.getElementById("place1").innerHTML =user.nom.charAt(0).toUpperCase() + user.nom.substring(1).toLowerCase();
                document.getElementById("err").innerHTML = ""; 
            } else if (user.place == 2) {
                document.getElementById("place2").innerHTML = user.nom.charAt(0).toUpperCase() + user.nom.substring(1).toLowerCase();
                document.getElementById("err").innerHTML = ""; 
            } else if (user.place == 3) {
                document.getElementById("place3").innerHTML = user.nom.charAt(0).toUpperCase() + user.nom.substring(1).toLowerCase();
                document.getElementById("err").innerHTML = ""; 
            } else if (user.place == 4) {
                document.getElementById("place4").innerHTML = user.nom.charAt(0).toUpperCase() + user.nom.substring(1).toLowerCase();
                document.getElementById("err").innerHTML = ""; 
            } else if (user.place == 5) {
                document.getElementById("place5").innerHTML = user.nom.charAt(0).toUpperCase() + user.nom.substring(1).toLowerCase();
                document.getElementById("err").innerHTML = ""; 
            } else if (user.place == 6) {
                document.getElementById("place6").innerHTML = user.nom.charAt(0).toUpperCase() + user.nom.substring(1).toLowerCase();
                document.getElementById("err").innerHTML = ""; 
            } else if (user.place == 7) {
                document.getElementById("place7").innerHTML = user.nom.charAt(0).toUpperCase() + user.nom.substring(1).toLowerCase();
                document.getElementById("err").innerHTML = ""; 
            } else if (user.place == 8) {
                document.getElementById("place8").innerHTML = user.nom.charAt(0).toUpperCase() + user.nom.substring(1).toLowerCase();
                document.getElementById("err").innerHTML = ""; 
            } else if (user.place == 9) {
                document.getElementById("place9").innerHTML = user.nom.charAt(0).toUpperCase() + user.nom.substring(1).toLowerCase();
                document.getElementById("err").innerHTML = ""; 
            } else if (user.place == 10) {
                document.getElementById("place10").innerHTML = user.nom.charAt(0).toUpperCase() + user.nom.substring(1).toLowerCase();
                document.getElementById("err").innerHTML = ""; 
            } else if (user.place == 11) {
                document.getElementById("place11").innerHTML = user.nom.charAt(0).toUpperCase() + user.nom.substring(1).toLowerCase();
                document.getElementById("err").innerHTML = ""; 
            } else if (user.place == 12) {
                document.getElementById("place12").innerHTML = user.nom.charAt(0).toUpperCase() + user.nom.substring(1).toLowerCase();
                document.getElementById("err").innerHTML = ""; 
            } else if (user.place == 13) {
                document.getElementById("place13").innerHTML = user.nom.charAt(0).toUpperCase() + user.nom.substring(1).toLowerCase();
                document.getElementById("err").innerHTML = ""; 
            } else if (user.place == 14) {
                document.getElementById("place14").innerHTML = user.nom.charAt(0).toUpperCase() + user.nom.substring(1).toLowerCase();
                document.getElementById("err").innerHTML = ""; 
            } else if (user.place == 15) {
                document.getElementById("place15").innerHTML = user.nom.charAt(0).toUpperCase() + user.nom.substring(1).toLowerCase();
                document.getElementById("err").innerHTML = ""; 
            } else if (user.place == 16) {
                document.getElementById("place16").innerHTML = user.nom.charAt(0).toUpperCase() + user.nom.substring(1).toLowerCase();
                document.getElementById("err").innerHTML = ""; 
            } else if (user.place == 17) {
                document.getElementById("place17").innerHTML = user.nom.charAt(0).toUpperCase() + user.nom.substring(1).toLowerCase();
                document.getElementById("err").innerHTML = ""; 
            } else if (user.place == 18) {
                document.getElementById("place18").innerHTML = user.nom.charAt(0).toUpperCase() + user.nom.substring(1).toLowerCase();
                document.getElementById("err").innerHTML = ""; 
            } else if (user.place == 19) {
                document.getElementById("place19").innerHTML = user.nom.charAt(0).toUpperCase() + user.nom.substring(1).toLowerCase();
                document.getElementById("err").innerHTML = ""; 
            } else if (user.place == 20) {
                document.getElementById("place20").innerHTML = user.nom.charAt(0).toUpperCase() + user.nom.substring(1).toLowerCase();
                document.getElementById("err").innerHTML = ""; 
            } else if (user.place == 21) {
                document.getElementById("place21").innerHTML = user.nom.charAt(0).toUpperCase() + user.nom.substring(1).toLowerCase();  
                document.getElementById("err").innerHTML = ""; 
            } else if (user.place == 22) {
                document.getElementById("place22").innerHTML = user.nom.charAt(0).toUpperCase() + user.nom.substring(1).toLowerCase();
                document.getElementById("err").innerHTML = ""; 
            } else {
                document.getElementById("err").innerHTML = "place introuvable";   
            }

            if(isNaN(user.numero )){
               document.getElementById('erreur').innerHTML = 'Entrer un nombre'
            }else{
                document.getElementById('erreur').innerHTML = "";
            }
            if(isNaN( user.place )){
                document.getElementById('erreur1').innerHTML = 'Entrer un nombre'
            }else{
                // if(user.place <= 22 && user.place >= 1){
                //     console.log(user.place);
                // } else {
                //     console.log("Place invalide");
                    
                //     document.getElementById('erreur1').innerHTML = 'Place invalide'
                // }
                document.getElementById('erreur1').innerHTML = "";
            }    
            if(isNaN( user.avance )){
                document.getElementById('erreur2').innerHTML = 'Entrer un nombre'
            }else{
                document.getElementById('erreur2').innerHTML = "";
            }
            if(isNaN( user.reste)){
            document.getElementById('erreur3').innerHTML = 'Entrer un nombre'
            }else{
                document.getElementById('erreur3').innerHTML = "";
            }
                props.addUser(user)
                setUser(initialFormState)
            }
            // else {
            //        console.log("ko")
                   
            //    }
        } }>
                    <h1>RESERVATION</h1>
                    <div className="lieu">
                    <a >TAMATAVY : 20.000Ar &nbsp;&nbsp;&nbsp;&nbsp; </a>
                    <a >MAHAJANGA : 30.000Ar  &nbsp;&nbsp;</a><br/><br/><br/>
                    </div>
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6">
                                <label>Nom </label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                <input className="rounded border border-primary" name="nom" type = "text" value={user.nom} onChange={handleInputChange} />
                                <br/><br/>
                                <label>Prenom </label> &nbsp;&nbsp;&nbsp;&nbsp;
                                <input className="rounded border border-primary" name="prenom" type = "text" value={user.prenom} onChange={handleInputChange}/><br/><br/>
                                
                                <label>N° Tel </label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                <input className="rounded border border-primary" name="numero" type="text" value={user.numero} onChange={handleInputChange}/>
                                <p  className="error" id="erreur"></p><br/>

                                <a className="label">Arrivée: </a>
                                <input type='radio' class= "a"name="dest"></input>
                                <label className="arriv" for="a">TAMATAVE</label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                <input type='radio' class= "b" name="dest"></input>
                                <label className="arriv" for="b">MAHAJANGA</label>
                            </div>
                            <div className="col-md-6">
                            <label>Place </label> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <input className="rounded border border-primary" name="place" type = "text" value={user.place} onChange={handleInputChange}/>
                    <p className="error" id="erreur1"></p><br/>

                    <table>
                        <tr>
                            <td className="label">Frais : </td>
                           
                            <td>
                                
                                <p> Avance &nbsp;&nbsp;
                                    <input className="rounded border border-primary" name="avance" type='text' value={user.avance} onChange={handleInputChange}/> Ar 
                                    <p className="error" id="erreur2"></p>
                                </p>
                                <p> Reste  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                <input className="rounded border border-primary" name="reste" type='text' value={user.reste} onChange={handleInputChange}/> Ar
                                <p className="error" id="erreur3"></p>
                                </p>
                            </td>	
                        </tr>
                    </table><br/>
                
                    <label>H depart </label> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <input className="rounded border border-primary" name="heure" type = "text" value={user.heure} onChange={handleInputChange}/>
                    <br/><br/>
                            </div>
                        </div>
                    </div>
                    

                    
                    <button id="boutton" className="btn btn-success">OK</button>
		</form>

        <div id="err"></div>
        <table id="tb" className="table table-secondary">
            <tr>
                <td colspan="2" id="td" className="td">CHAUFFEUR</td>
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
            </tr>
        </table>
        </div>

	)
}	
export default AddUserForm