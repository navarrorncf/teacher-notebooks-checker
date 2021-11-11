export const SUBJECT_NAMES_FROM_ABBREVIATIONS = {
  ART: "Arte",
  BIO: "Biologia",
  EDF: "Educação Física",
  FIL: "Filosofia",
  FIS: "Física",
  GEO: "Geografia",
  HIS: "História",
  ESP: "Língua Estrangeira Moderna - Espanhol",
  ING: "Língua Estrangeira Moderna - Inglês",
  POR: "Língua Portuguesa",
  MAT: "Matemática",
  PD1: "Projeto Interdisciplinar I",
  PD2: "Projeto Interdisciplinar II",
  PD3: "Projeto Interdisciplinar III",
  QUI: "Química",
  SOC: "Sociologia",
};

export const SUBJECT_ABBREVIATIONS = {
  Arte: "ART",
  Biologia: "BIO",
  "Educação Física": "EDF",
  Filosofia: "FIL",
  Física: "FIS",
  Geografia: "GEO",
  História: "HIS",
  "Língua Estrangeira Moderna - Espanhol": "ESP",
  "Língua Estrangeira Moderna - Inglês": "ING",
  "Língua Portuguesa": "POR",
  Matemática: "MAT",
  "Projeto Interdisciplinar I": "PD1",
  "Projeto Interdisciplinar II": "PD2",
  "Projeto Interdisciplinar III": "PD3",
  Química: "QUI",
  Sociologia: "SOC",
};

export const SUBJECT_GROUP_REGEXPS = {
  dayShift: {
    annuals: /portugu.s|matem.tica|educa..o/i,
    firstBlock:
      /biologia|filosofia|hist.ria|ingl.s|qu.mica|projeto interdisciplinar I$/i,
    secondBlock:
      /arte|espanhol|^f.sica|geografia|sociologia|projeto interdisciplinar II/i,
  },
  nightShift: {
    annuals: /portugu.s|matem.tica/i,
    firstBlock:
      /biologia|filosofia|hist.ria|ingl.s|qu.mica|projeto interdisciplinar I$/i,
    secondBlock:
      /arte|^f.sica|geografia|sociologia|projeto interdisciplinar II|educa..o/i,
  },
};

export const STUDENT_GROUPS_STARTING_BLOCKS = {
  firstBlock:
    /^(andi|ange|arau|caix|cast|cedr|cere|arir|chau|arar|gavi|gato|lobo|mico|bra.|tucu|amaz|mata|cerr)/i,
  secondBlock:
    /^(gara|imbu|jaca|jato|jequ|mogn|pau-|jacu|muri|sagu|on.a|tama|tart|tatu|brom|uaca|pant|pamp|caat)/i,
  eja1s: /^(dese|sava|taig|tund|camp|flor)/i,
  eja2s: /^(baru|buri|pequ|grav|jeni|mang)/i,
};

export const STUDENT_GROUPS_SHIFTS = {
  nightShift:
    /^(amaz|mata|cerr|pant|pamp|caat|dese|sava|taig|tund|camp|flor|baru|buri|pequ|grav|jeni|mang)/i,
  dayShift:
    /^(andi|ange|arau|caix|cast|cedr|cere|arir|chau|arar|gavi|gato|lobo|mico|bra.|tucu|gara|imbu|jaca|jato|jequ|mogn|pau-|jacu|muri|sagu|on.a|tama|tart|tatu|brom|uaca)/i,
};
