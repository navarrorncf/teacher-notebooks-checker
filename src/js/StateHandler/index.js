import SUBJECTS from "../config/subjects";
import TEACHERS from "../config/teachers";
import GROUPS from "../config/groups";
import REPORTS from "../config/notebooksParser";

const initialState = {
  subjects: SUBJECTS,
  teachers: TEACHERS,
  groups: GROUPS,
  reports: REPORTS,
  currentFilterType: "teachers",
  currentFilterOption: null,
  bimestersConsidered: {
    1: true,
    2: true,
    3: true,
    4: true,
  },
};

class State {
  constructor({
    subjects,
    teachers,
    groups,
    reports,
    currentFilterType,
    currentFilterOption,
    bimestersConsidered,
    pendingOnly,
  }) {
    this.subjects = subjects;
    this.teachers = teachers;
    this.groups = groups;
    this.reports = reports;
    this.currentFilterType = currentFilterType;
    this.currentFilterOption = currentFilterOption;
    this.bimestersConsidered = bimestersConsidered;
    this.pendingOnly = pendingOnly;

    this.observers = {
      filterOption: [],
      filterType: [],
      bimestersConsidered: [],
      pendingOnly: [],
    };
  }

  getFilterType() {
    return this.currentFilterType;
  }

  updateFilterType(type) {
    console.log("Updating Filter Type...", type);
    this.currentFilterType = type;
    this.notify(this.observers.filterType);
  }

  getBimestersConsidered() {
    return this.bimestersConsidered;
  }

  updateBimestersConsidered(bimester, value) {
    this.bimestersConsidered[bimester] = value;
    this.notify(this.observers.bimestersConsidered);
  }

  getOptions() {
    return this[this.currentFilterType];
  }

  getFilterOption() {
    return this.currentFilterOption;
  }

  updateFilterOption(filterOption) {
    this.currentFilterOption = filterOption;
    this.notify(this.observers.filterOption);
  }

  getReports() {
    // report object property is a singular noun
    const filterType = this.currentFilterType.replace(/s$/, "");

    return this.reports.filter(
      (report) => report[filterType] === this.currentFilterOption
    );
  }

  getPendingOnly() {
    return this.pendingOnly;
  }

  updatePendingOnly(pendingOnly) {
    this.pendingOnly = pendingOnly;
    this.notify(this.observers.pendingOnly);
  }

  notify(observers) {
    observers.forEach((observer) => observer.notify());
  }

  subscribe(group, newObserver) {
    const existingObserver = this.observers[group].some(
      (observer) => observer === newObserver
    );

    if (!existingObserver) {
      this.observers[group].push(newObserver);
    }
  }

  unsubscribe(group, observer) {
    this.observers[group] = this.observers[group].filter(
      (subscription) => subscription !== observer
    );
  }
}

const appState = new State(initialState);

export default appState;
