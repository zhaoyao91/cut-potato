const _ = require("lodash");

const cutPotato = require(".");

describe("cutPotato", () => {
  it("should pick up all fields of the object", () => {
    const potato = {
      name: "Bob",
      age: 20,
      handsome: true
    };

    const fieldsCount = Object.keys(potato).length;

    const cut = (potato, bowl) => {
      const potatoFields = Object.keys(potato);

      expect(potatoFields.length + bowl.length).toBe(fieldsCount);

      const pickedField = potatoFields[0];
      const slice = potato[pickedField];

      const remainedPotato = { ...potato };
      delete remainedPotato[pickedField];

      return [remainedPotato, slice];
    };

    const mother = nextPotato => Object.keys(nextPotato).length === 0;

    const bowl = cutPotato(potato, cut, mother);

    expect(bowl.length).toBe(Object.keys(potato).length);
    expect(_.values(potato).sort()).toEqual(bowl.sort());
  });
});
