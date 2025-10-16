import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
    return (
        <div>
            <h1>Bienvenido al sistema de Registro</h1>
            <Link to="/register/personal"> Comenzar Registro </Link>
        </div>
    );
};

export default Home;