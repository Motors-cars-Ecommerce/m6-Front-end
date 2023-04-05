


const Dashboard = () => {
    return(
        <>
        <section className="header">
            <h2>motors shop</h2>
            <div>
                <button>fazer login</button>
                <button>Cadastrar</button>
            </div>
        </section>
        <section>
            <h2>Motors Shop</h2>
            <h2>A melhor plataforma de anúncios de carros do país</h2>
        </section>
        <section>
            <div className="filters">
                <div className="">
                    <h3>marca</h3>
                    <ul>
                        <li>teste</li>
                        <li>teste</li>
                        <li>teste</li>
                    </ul>
                </div>
                <div className="">
                    <h3>marca</h3>
                    <ul>
                        <li>teste</li>
                        <li>teste</li>
                        <li>teste</li>
                    </ul>
                </div>
                <div className="">
                    <h3>modelo</h3>
                    <ul>
                        <li>teste</li>
                        <li>teste</li>
                        <li>teste</li>
                    </ul>
                </div>
                <div className="">
                    <h3>cor</h3>
                    <ul>
                        <li>teste</li>
                        <li>teste</li>
                        <li>teste</li>
                    </ul>
                </div>
                <div className="">
                    <h3>ano</h3>
                    <ul>
                        <li>teste</li>
                        <li>teste</li>
                        <li>teste</li>
                    </ul>
                </div>
                <div className="">
                    <h3>Km</h3>
                    <input placeholder="min"/>
                    <input placeholder="max"/>
                </div>
                <div className="">
                    <h3>preço</h3>
                    <input placeholder="min"/>
                    <input placeholder="max"/>
                </div>
                
            </div>
            <div className="filters">
                <ul>
                    <li>carro</li>
                    <li>carro</li>
                    <li>carro</li>
                    <li>carro</li>
                    <li>carro</li>
                    <li>carro</li>
                    <li>carro</li>
                    <li>carro</li>
                </ul>
            </div>
        </section>
    </>
    )
}


export default Dashboard