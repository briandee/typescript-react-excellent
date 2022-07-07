enum Priority {
  mustHave = "Must Have",
  shouldHave = "Should Have",
  couldHave = "Could Have",
  wontHave = "Won't Have"
}

const backlog = {
  releases: [
    {
      name: "Sprint 1",
      epics: [
        {
          name: "Account Management",
          tasks: [
            { name: "Single Sign On", priority: Priority.mustHave },
            { name: "Email Notifications", priority: Priority.mustHave }
          ]
        }
      ]
    }
  ]
};

type Unarray<T> = T extends Array<infer U> ? U : T;

type Release = Unarray<typeof backlog["releases"]>;

type Epic = Unarray<Release["epics"]>;

export const releases: Release = {
  name: "Sprint 1",
  epics: [
    {
      name: "Account Management",
      tasks: [
        { name: "Single Sign On", priority: Priority.mustHave },
        { name: "Email Notifications", priority: Priority.mustHave }
      ]
    }
  ]
};

export const epic: Epic = {
  name: "Account Management",
  tasks: [
    { name: "Single Sign On", priority: Priority.mustHave },
    { name: "Email Notifications", priority: Priority.mustHave }
  ]
};
