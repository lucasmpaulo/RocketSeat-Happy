const Database = require('./db');
const saveOrphanage = require('./saveOrphanage');

Database.then(async db => {
    // Insert data on the table
    // await saveOrphanage(db, {
    //     lat: "-29.9381289",
    //     lng: "-51.1121595",
    //     name: "Lar das Meninas",
    //     about: "Um local para se trazer alegria",
    //     whatsapp: "51 99822-4334",
    //     description: "Presta assistência a crianças de 06 a 15 anos que se encontre em situação de risco e/ou vulnerabilidade social.",
    //     images: [
    //         "https://images.unsplash.com/photo-1598136490937-f77b0ce520fe?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9",
    //         "https://images.unsplash.com/photo-1595207011175-3d72f5a3b21c?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9"
    //     ].toString(),
    //     instructions: "Venha como se sentir a vontade e traga muito amor e paciência para dar.",
    //     opening_hours: "Horário de visitas Das 18h até as 8h",
    //     open_on_weekends: "1"
    // });

    // Search data on the table
    const selectedOrphanages = await db.all("SELECT * FROM orphanages");
    console.log(selectedOrphanages);

    // Searching only one orphanage at id
    // const orphanage = await db.all('SELECT * FROM orphanages WHERE id = "1"');

    // // Deleting data of the database
    // await db.run("Delete From tabela WHERE id = '4'");
});