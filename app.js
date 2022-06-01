const express = require('express');
const app = express();
const cors = require('cors');

app.use(express.json());
app.use(cors({
    origin: '*'
}));


app.get("/qrcodedata", (req, res) => {
    response = [
        {
            "ac": "427QX",
            "modsum": "",
            "eo": "IS4Q2500057",
            "sb": "",
            "fleet": "Q400",
            "contenT_DESCRIPTION": null,
            "ecO_DATE": "2015-10-23T00:00:00",
            "eO_DESCRIPTION": "IS4Q2500057 - WARDROBES AND PARTITIONS - INSTALLATION OF A BUMPER TO PREVENT DAMAGE TO THE SWITCHES ON THE WING BULKHEAD ASSEMBLY",
            "pn": null,
            "position": null,
            "sn": null,
            "factorY_INC": "N",
            "status": "TERMINATED",
            "repeaT_NUMBER": 1,
            "schedulE_CYCLES_REPEAT": 0,
            "schedulE_HOURS_REPEAT": 0,
            "schedulE_DAYS_REPEAT": 0,
            "schedulE_DATE_REPEAT": null
        },
        {
            "ac": "427QX",
            "modsum": "",
            "eo": "IS4Q2500079",
            "sb": "",
            "fleet": "Q400",
            "contenT_DESCRIPTION": null,
            "ecO_DATE": "2019-12-02T00:00:00",
            "eO_DESCRIPTION": "REMOVAL OF THE SEALING TAPE FROM THE AFT CLASS \"C\" BAGGAGE COMPARTMENT",
            "pn": null,
            "position": null,
            "sn": null,
            "factorY_INC": "N",
            "status": "TERMINATED",
            "repeaT_NUMBER": 1,
            "schedulE_CYCLES_REPEAT": 0,
            "schedulE_HOURS_REPEAT": 0,
            "schedulE_DAYS_REPEAT": 0,
            "schedulE_DATE_REPEAT": null
        },
        {
            "ac": "427QX",
            "modsum": "",
            "eo": "IS4Q2700020",
            "sb": "",
            "fleet": "Q400",
            "contenT_DESCRIPTION": null,
            "ecO_DATE": "2019-12-02T00:00:00",
            "eO_DESCRIPTION": "INCORPORATION OF IS4Q2700020 MODSUM, INTRODUCTION OF CORROSION RESISTANT FASTNERS TO INBD AND OTBD SPOILER [LH AND RH WING] ATTACHMENT LOCATIONS ",
            "pn": null,
            "position": null,
            "sn": null,
            "factorY_INC": "N",
            "status": "TERMINATED",
            "repeaT_NUMBER": 1,
            "schedulE_CYCLES_REPEAT": 0,
            "schedulE_HOURS_REPEAT": 0,
            "schedulE_DAYS_REPEAT": 0,
            "schedulE_DATE_REPEAT": null
        },
        {
            "ac": "427QX",
            "modsum": "",
            "eo": "IS4Q3200050-RH",
            "sb": "",
            "fleet": "Q400",
            "contenT_DESCRIPTION": null,
            "ecO_DATE": "2014-04-03T00:00:00",
            "eO_DESCRIPTION": "MODIFICATION TO THE RIGHT MLG BONDING JUMPER",
            "pn": null,
            "position": null,
            "sn": null,
            "factorY_INC": "N",
            "status": "TERMINATED",
            "repeaT_NUMBER": 1,
            "schedulE_CYCLES_REPEAT": 0,
            "schedulE_HOURS_REPEAT": 0,
            "schedulE_DAYS_REPEAT": 0,
            "schedulE_DATE_REPEAT": null
        },
        {
            "ac": "427QX",
            "modsum": "",
            "eo": "IS4Q5400003REVB",
            "sb": "",
            "fleet": "Q400",
            "contenT_DESCRIPTION": null,
            "ecO_DATE": "2010-12-22T00:00:00",
            "eO_DESCRIPTION": "REWORK OF MLG FWD DOORS TO PEVENT FOULING ON MLG SHOCK STRUT",
            "pn": null,
            "position": null,
            "sn": null,
            "factorY_INC": "N",
            "status": "TERMINATED",
            "repeaT_NUMBER": 1,
            "schedulE_CYCLES_REPEAT": 0,
            "schedulE_HOURS_REPEAT": 0,
            "schedulE_DAYS_REPEAT": 0,
            "schedulE_DATE_REPEAT": null
        }];

    res.json(response);
});

app.listen(8000, () => {
    console.log("Server started on port 8000");
});