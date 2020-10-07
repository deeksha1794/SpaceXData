/* eslint-disable no-undef */
import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import Filter from "../component/filter";
import SpaceFooter from "../component/footer";
import SpaceHeader from "../component/header";
import Main from "../component/main";
import { sampleData } from "../test/sample";


let container = null;
const yearArr = ["2006", "2007", "2008", "2009",
    "2010", "2011", "2012", "2013", "2014", "2015",
    "2016", "2017", "2018", "2019", "2020"];
beforeEach(() => {
    container = document.createElement("div");
    document.body.appendChild(container);
});

afterEach(() => {
    unmountComponentAtNode(container);
    container.remove();
    container = null;
});

it("renders with Tags without props", () => {
    act(() => {
        render(<SpaceHeader />, container);
    });
    expect(container.textContent).toBe("SpaceX Launch Programs");

    act(() => {
        render(<SpaceFooter />, container);
    });
    expect(container.textContent).toBe("Developed by:Deeksha khare");

    act(() => {
        render(<Main />, container);
    });
    expect(container.textContent).toBe("");

    act(() => {
        render(<Filter />, container);
    });
    expect(container.textContent).toBe("FiltersLaunch YearSuccessful LaunchTrueFalseSuccessful LandingTrueFalse");
});

it("renders with Tags with props", () => {
    act(() => {
        render(<Main
            spaces = {sampleData}
        />, container);
    });

    act(() => {
        render(<Filter
            yearArr={yearArr}
        />, container);
    });
    expect(container.textContent)
        .toBe(`FiltersLaunch Year200620072008200920102011201220132014201520162017201820192020Successful LaunchTrueFalseSuccessful LandingTrueFalse`);
});
