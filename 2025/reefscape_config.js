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
      "defaultValue": "Worlds",
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
        "r1": "Red 1",
        "b1": "Blue 1<br>",
        "r2": "Red 2",
        "b2": "Blue 2<br>",
        "r3": "Red 3",
        "b3": "Blue 3"
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
    
    { "name": "Leave Starting Line",
      "code": "al",
      "type": "bool",
      "idx": 1,
      "column": 0
    },
    
       { "name": "Coral L1",
      "code": "ac1",
      "type": "counter",
      "idx": 2,
      "column": 0
    },
    
       { "name": "Coral L2",
      "code": "ac2",
      "type": "counter",
      "idx": 3,
      "column": 0
    },
    
      { "name": "Coral L3",
      "code": "ac3",
      "type": "counter",
      "idx": 4,
      "column": 0
    },
    
    { "name": "Coral L4",
      "code": "ac4",
      "type": "counter",
      "idx": 5,
      "column": 0
    },
    
    { "name": "Processor Score",
      "code": "aps",
      "type": "counter",
      "idx": 6,
      "column": 0
    },
    
      { "name": "Net Score",
      "code": "ans",
      "type": "counter",
      "idx": 7,
      "column": 0
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
    
    { "name": "Coral L1",
      "code": "tc1",
      "type": "counter",
      "idx": 1,
      "column": 0
    },
    
    { "name": "Coral L2",
      "code": "tc2",
      "type": "counter",
      "idx": 2,
      "column": 0
    },
    
    { "name": "Coral L3",
      "code": "tc3",
      "type": "counter",
      "idx": 3,
      "column": 0
    },
    
    { "name": "Coral L4",
      "code": "tc4",
      "type": "counter",
      "idx": 4,
      "column": 0
    },
   
    { "name": "Processor Score",
      "code": "tps",
      "type": "counter",
      "idx": 5,
      "column": 0
    },
    
    { "name": "Net Score",
      "code": "tns",
      "type": "counter",
      "idx": 6,
      "column": 0
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
    
    { "name": "Died/Immobilized",
      "code": "die",
      "type": "bool",
      "idx": 1,
      "column": 0
    },
    
    { "name": "Tippy<br>(almost tipped over)",
      "code": "tip",
      "type": "bool",
      "idx": 2,
      "column": 0
    },
    
    
    { "name": "Comments",
      "code": "co",
      "type": "text",
      "size": 15,
      "maxSize": 55,
      "idx": 3,
      "column": 0
    }
    
    
  ]
}`;
