import Person from "@/index"

it("should sum two numbers", () => {
  const person = new Person()
  expect(person.sayMyName()).toBe("ola")
})
