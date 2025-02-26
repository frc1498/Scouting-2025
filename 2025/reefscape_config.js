var config_data = `
{
  "dataFormat": "tsv",
  "title": "Scouting PASS 2025",
  "page_title": "REEFSCAPE",
  "checkboxAs": "10",
  "prematch": [
    { "name": "Scouter Initials",
      "code": "s",
      "type": "scouter",
      "size": 5,
      "maxSize": 5,
      "required": "true",
      "idx": 0,
      "column": 0
    },
    { "name": "Event",
      "code": "e",
      "type": "event",
      "defaultValue": "2025ilpe",
      "required": "true",
      "idx": 1,
      "column": 0
    },
    { "name": "Match Level",
      "code": "l",
      "type": "level",
      "choices": {
        "qm": "Quals<br>",
        "sf": "Semifinals<br>",
        "f": "Finals"
      },
      "defaultValue": "qm",
      "required": "true",
      "idx": 2,
      "column": 0
    },
    { "name": "Match #",
      "code": "m",
      "type": "match",
      "min": 1,
      "max": 150,
      "required": "true",
      "idx": 3,
      "column": 0
    },
    { "name": "Alliance",
      "code": "r",
      "type": "robot",
      "choices": {
        "r1": "Red",
        "b1": "Blue"
      },
      "required":"true",
      "idx": 4,
      "column": 0
    },
    { "name": "Team #1",
      "code": "t",
      "type": "team",
      "min": 1,
      "max": 99999,
      "idx": 5,
      "column": 0
    },
    { "name": "Team #2",
      "code": "t2",
      "type": "team",
      "min": 1,
      "max": 99999,
      "idx": 7,
      "column": 0
    },
    { "name": "Team #3",
      "code": "t3",
      "type": "team",
      "min": 1,
      "max": 99999,
      "idx": 9,
      "column": 0
    }
   
  ],
  "auton": [
    { "name": "1",
      "code": "header_1",
      "type": "title",
      "team": "1",
      "idx": 0,
      "column": 0
    },
    { "name": "2",
      "code": "header_2",
      "type": "title",
      "team": "2",
      "idx": 0,
      "column": 2
    },
    { "name": "3",
      "code": "header_3",
      "type": "title",
      "team": "3",
      "idx": 0,
      "column": 4
    },
    { "name": "Leave Starting Line",
      "code": "al",
      "type": "bool",
      "idx": 1,
      "column": 0
    },
    { "name": "Leave Starting Line",
      "code": "al2",
      "type": "bool",
      "idx": 1,
      "column": 2
    },
    { "name": "Leave Starting Line",
      "code": "al3",
      "type": "bool",
      "idx": 1,
      "column": 4
    },
    { "name": "Coral L1",
      "code": "ac1",
      "type": "bool",
      "idx": 2,
      "column": 0
    },
    { "name": "Coral L1",
      "code": "ac12",
      "type": "bool",
      "idx": 2,
      "column": 2
    },
    { "name": "Coral L1",
      "code": "ac13",
      "type": "bool",
      "idx": 2,
      "column": 4
    },
    { "name": "Coral L2",
      "code": "ac2",
      "type": "bool",
      "idx": 3,
      "column": 0
    },
    
    { "name": "Coral L2",
      "code": "ac22",
      "type": "bool",
      "idx": 3,
      "column": 2
    },
    { "name": "Coral L2",
      "code": "ac23",
      "type": "bool",
      "idx": 3,
      "column": 4
    },

    { "name": "Coral L3",
      "code": "ac3",
      "type": "bool",
      "idx": 4,
      "column": 0
    },
    { "name": "Coral L3",
      "code": "ac32",
      "type": "bool",
      "idx": 4,
      "column": 2
    },
    { "name": "Coral L3",
      "code": "ac33",
      "type": "bool",
      "idx": 4,
      "column": 4
    },
    { "name": "Coral L4",
      "code": "ac4",
      "type": "bool",
      "idx": 5,
      "column": 0
    },
    { "name": "Coral L4",
      "code": "ac42",
      "type": "bool",
      "idx": 5,
      "column": 2
    },
    { "name": "Coral L4",
      "code": "ac43",
      "type": "bool",
      "idx": 5,
      "column": 4
    },

    { "name": "Processor Score",
      "code": "aps",
      "type": "bool",
      "idx": 6,
      "column": 0
    },
     { "name": "Processor Score",
      "code": "aps2",
      "type": "bool",
      "idx": 6,
      "column": 2
    },
     { "name": "Processor Score",
      "code": "aps3",
      "type": "bool",
      "idx": 6,
      "column": 4
    },
    { "name": "Net Score",
      "code": "ans",
      "type": "bool",
      "idx": 7,
      "column": 0
    },
      { "name": "Net Score",
      "code": "ans2",
      "type": "bool",
      "idx": 7,
      "column": 2
    },
    { "name": "Net Score",
      "code": "ans3",
      "type": "bool",
      "idx": 7,
      "column": 4
    }
  ],
  "teleop": [
    { "name": "11",
      "code": "header_1",
      "type": "title",
      "team": "1",
      "idx": 0,
      "column": 0
    },
    { "name": "22",
      "code": "header_2",
      "type": "title",
      "team": "2",
      "idx": 0,
      "column": 2
    },
    { "name": "33",
      "code": "header_3",
      "type": "title",
      "team": "3",
      "idx": 0,
      "column": 4
    },
    { "name": "Coral L1",
      "code": "tc1",
      "type": "bool",
      "idx": 1,
      "column": 0
    },
    { "name": "Coral L1",
      "code": "tc12",
      "type": "bool",
      "idx": 1,
      "column": 2
    },
    { "name": "Coral L1",
      "code": "tc13",
      "type": "bool",
      "idx": 1,
      "column": 4
    },
    { "name": "Coral L2",
      "code": "tc2",
      "type": "bool",
      "idx": 2,
      "column": 0
    },
    { "name": "Coral L2",
      "code": "tc22",
      "type": "bool",
      "idx": 2,
      "column": 2
    },
    { "name": "Coral L2",
      "code": "tc23",
      "type": "bool",
      "idx": 2,
      "column": 4
    },
    { "name": "Coral L3",
      "code": "tc3",
      "type": "bool",
      "idx": 3,
      "column": 0
    },
    { "name": "Coral L3",
      "code": "tc32",
      "type": "bool",
      "idx": 3,
      "column": 2
    },
    { "name": "Coral L3",
      "code": "tc33",
      "type": "bool",
      "idx": 3,
      "column": 4
    },
    { "name": "Coral L4",
      "code": "tc4",
      "type": "bool",
      "idx": 4,
      "column": 0
    },
    { "name": "Coral L4",
      "code": "tc42",
      "type": "bool",
      "idx": 4,
      "column": 2
    },
    { "name": "Coral L4",
      "code": "tc43",
      "type": "bool",
      "idx": 4,
      "column": 4
    },
    { "name": "Processor Score",
      "code": "tps",
      "type": "bool",
      "idx": 5,
      "column": 0
    },
    { "name": "Processor Score",
      "code": "tps2",
      "type": "bool",
      "idx": 5,
      "column": 2
    },
    { "name": "Processor Score",
      "code": "tps3",
      "type": "bool",
      "idx": 5,
      "column": 4
    },
    { "name": "Net Score",
      "code": "tns",
      "type": "bool",
      "idx": 6,
      "column": 0
    },
    { "name": "Net Score",
      "code": "tns2",
      "type": "bool",
      "idx": 6,
      "column": 2
    },
    { "name": "Net Score",
      "code": "tns3",
      "type": "bool",
      "idx": 6,
      "column": 4
    },
    { "name": "Pickup From",
      "code": "tpu",
      "type": "radio",
      "choices": {
        "s": "Coral Station<br>",
        "f": "Floor<br>",
        "b": "Both<br>",
        "x": "Not Attempted"
      },
      "defaultValue": "x",
      "idx": 7,
      "column": 0
    },
    { "name": "Pickup From",
      "code": "tpu2",
      "type": "radio",
      "choices": {
        "s": "Coral Station<br>",
        "f": "Floor<br>",
        "b": "Both<br>",
        "x": "Not Attempted"
      },
      "defaultValue": "x",
      "idx": 7,
      "column": 2
    },
    { "name": "Pickup From",
      "code": "tp3",
      "type": "radio",
      "choices": {
        "s": "Coral Station<br>",
        "f": "Floor<br>",
        "b": "Both<br>",
        "x": "Not Attempted"
      },
      "defaultValue": "x",
      "idx": 7,
      "column": 4
    }
    
  ],
  "endgame": [
    { "name": "111",
      "code": "header_1",
      "type": "title",
      "team": "1",
      "idx": 0,
      "column": 0
    },
    { "name": "222",
      "code": "header_2",
      "type": "title",
      "team": "2",
      "idx": 0,
      "column": 2
    },
    { "name": "333",
      "code": "header_3",
      "type": "title",
      "team": "3",
      "idx": 0,
      "column": 4
    },
    
    { "name": "Final Robot Status",
      "code": "efs",
      "type":"radio",
      "choices": {
        "bp": "Parked<br>",
        "ba": "Parked/Fail Climb<br>",
        "bs": "Shallow Cage<br>",
        "bd": "Deep Cage<br>",
        "x": "Not attempted"
      },
      "defaultValue": "x",
      "idx": 1,
      "column": 0
    },
    { "name": "Final Robot Status",
      "code": "efs2",
      "type":"radio",
      "choices": {
        "bp": "Parked<br>",
        "ba": "Parked/Fail Climb<br>",
        "bs": "Shallow Cage<br>",
        "bd": "Deep Cage<br>",
        "x": "Not attempted"
      },
      "defaultValue": "x",
      "idx": 1,
      "column": 2
    },
      { "name": "Final Robot Status",
      "code": "efs3",
      "type":"radio",
      "choices": {
        "bp": "Parked<br>",
        "ba": "Parked/Fail Climb<br>",
        "bs": "Shallow Cage<br>",
        "bd": "Deep Cage<br>",
        "x": "Not attempted"
      },
      "defaultValue": "x",
      "idx": 1,
      "column": 4
    }
  ],
  "postmatch": [
    { "name": "1111",
      "code": "header_1",
      "type": "title",
      "team": "1",
      "idx": 0,
      "column": 0
    },
    { "name": "2222",
      "code": "header_2",
      "type": "title",
      "team": "2",
      "idx": 0,
      "column": 2
    },
    { "name": "3333",
      "code": "header_3",
      "type": "title",
      "team": "3",
      "idx": 0,
      "column": 4
    },

    { "name": "Died/Immobilized",
      "code": "die",
      "type": "bool",
      "idx": 1,
      "column": 0
    },
    { "name": "Died/Immobilized",
      "code": "die2",
      "type": "bool",
      "idx": 1,
      "column": 2
    },
    { "name": "Died/Immobilized",
      "code": "die3",
      "type": "bool",
      "idx": 1,
      "column": 4
    },
    { "name": "Tippy<br>(almost tipped over)",
      "code": "tip",
      "type": "bool",
      "idx": 2,
      "column": 0
    },
    { "name": "Tippy<br>(almost tipped over)",
      "code": "tip2",
      "type": "bool",
      "idx": 2,
      "column": 2
    },
    { "name": "Tippy<br>(almost tipped over)",
      "code": "tip3",
      "type": "bool",
      "idx": 2,
      "column": 4
    },
    
    { "name": "Comments",
      "code": "co",
      "type": "text",
      "size": 15,
      "maxSize": 55,
      "idx": 3,
      "column": 0
    },
    { "name": "Comments",
      "code": "co2",
      "type": "text",
      "size": 15,
      "maxSize": 55,
      "idx": 3,
      "column": 2
    },
    { "name": "Comments",
      "code": "co3",
      "type": "text",
      "size": 15,
      "maxSize": 55,
      "idx": 3,
      "column": 4
    }
    
  ]
}`;
