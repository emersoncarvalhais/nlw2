const Database = require('./db')
const createProffy = require('./createProffy')

Database.then(async (db) => {
    //INSERIR DADOS
    proffyValue = {
        name:"Diego Fernandes", 
        avatar:"https://avatars2.githubusercontent.com/u/2254731?s=460&amp;u=0ba16a79456c2f250e7579cb388fa18c5c2d7d65&amp;v=4", 
        whatsapp:"5531988776655", 
        bio:"Entusiasta das melhores tecnologias de química avançada."
    }

    classValue = {
        subject: 1, 
        cost:"20,00", 
        //proffy_id virá pelo banco de dados
    }

    classScheduleValues = [
        //class_id virá pelo banco de dados após cadastrar a class
        {
            weekday:1, 
            time_from:720, 
            time_to:1220
        },
        {
            weekday:0, 
            time_from:520, 
            time_to:1220
        }
    ]
    // await createProffy(db, {proffyValue, classValue, classScheduleValues})
    //CONSULTAR OS DADOS INSERIDOS

    //TODOS OS PROFFYS 
    const selectedProffys = await db.all("SELECT * FROM proffys")
    // console.log(selectedProffys)

    //CONSULTAR AS CLASSES DE UM DETERMINADO PROFESSOR
    //E TRAZER JUNTO, OS DADOS DO PROFESSOR
    const selectClassesAndProffys = await db.all(`
        SELECT classes.*, proffys.*
        FROM proffys
        JOIN classes ON (classes.proffy_id = proffys.id)
        WHERE classes.proffy_id = 1;
    `)
    // console.log(selectClassesAndProffys)

    //TIME_FROM >= AO HORARIO SOLICITADO E O TIME_TO <= AO SOLICITADO
    const selectClassesSchedules = await db.all(`
        SELECT class_schedule.*
        FROM class_schedule
        WHERE class_schedule.class_id = "1"
        AND class_schedule.weekday = "0"
        AND class_schedule.time_from <= "520"
        AND class_schedule.time_to > "520"
    `) 
    // console.log(selectClassesSchedules)
})