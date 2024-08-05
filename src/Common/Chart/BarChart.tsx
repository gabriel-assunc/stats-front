import * as d3 from "d3";
import { useEffect } from "react";

type PorcentageType = {
    porcentage: number,
    label: string
}

interface BarChartProps {
    dataToPlot: PorcentageType[],
    total: number,
    xMarks: string[],
    yMarks: number[]
}

const BarChart = ({ dataToPlot, total, xMarks, yMarks }: BarChartProps) => {
    const marginTop = 30;
    const marginRight = 10;
    const marginBottom = 30;
    const marginLeft = 40;

    const setXScale = (width: number) => d3.scaleBand()
        .domain(xMarks)
        .range([marginLeft, width - marginRight])
        .padding(0.1);

    const setYScale = (height: number) => d3.scaleLinear()
        .domain(yMarks)
        .range([height - marginBottom, marginTop]);

    const setSvgDimensions = (width: number, height: number) => d3.select("#bar-chart")
        .attr("width", '100%')
        .attr("height", '100%')
        .attr("viewBox", [0, 0, width, height])
        .attr("style", "max-width: 100%; height: auto;");


    const setXAxis = (
        svg: d3.Selection<d3.BaseType, unknown, HTMLElement, any>,
        height: number,
        positionX: d3.AxisScale<string>
    ) => svg.append("g")
        .attr("transform", `translate(0,${height - marginBottom})`)
        .call(d3.axisBottom(positionX).tickSizeOuter(0))
        .call(g => g.append("text")
            .attr("x", 154)
            .attr("y", 25)
            .attr("fill", "currentColor")
            .attr("text-anchor", "start")
            .text("Maior ou igual a"))

    const setYAxis = (
        svg: d3.Selection<d3.BaseType, unknown, HTMLElement, any>,
        width: number,
        positionY: d3.ScaleLinear<number, number, never>
    ) => svg.append("g")
        .attr("transform", `translate(30,0)`)
        .call(d3.axisLeft(positionY)
            .tickFormat((yAxis) => yAxis.valueOf().toFixed())
            .tickSize(-width + marginLeft)
        )
        .call(g => g.select(".domain").remove())
        .call(g => g.append("text")
            .attr("x", -25)
            .attr("y", 20)
            .attr("fill", "currentColor")
            .attr("text-anchor", "start")
            .text("↑ Porcentagem (%)"))
        .style("stroke-dasharray", "5 5");

    const addTotalLabel = (svg: d3.Selection<d3.BaseType, unknown, HTMLElement, any>) => svg.append("text")
        .attr("x", 210)
        .attr("y", 20)
        .style("font-size", "17px")
        .attr("fill", "black")
        .attr("text-anchor", "start")
        .text("Total Stats: " + total)

    const onMouseOver = (e: SVGRectElement | null, data: PorcentageType) => {
        const parentNode = e?.parentElement
        if (parentNode)
            d3.select(parentNode)
                .style("cursor", "pointer")
                .append("text")
                .attr("class", "porcentage")
                .attr("fill", "black")
                .text(data.porcentage.toFixed(0) + "%")
                .attr("x", 150)
                .attr("y", 24)

        d3.select(e)
            .style("opacity", "0.8")
    }


    const onMouseOut = (e: SVGRectElement | null) => {
        d3.select('.porcentage').remove()
        d3.select(e)
            .style("opacity", "1")
    }

    const addRectToSvg = (
        svg: d3.Selection<d3.BaseType, unknown, HTMLElement, any>,
        positionX: d3.ScaleBand<string>,
        positionY: d3.ScaleLinear<number, number, never>
    ) => svg.append("g")
        .attr("fill", "steelblue")
        .attr("class", "bars")
        .selectAll()
        .data(dataToPlot)
        .join("rect")
        .attr("x", (data) => positionX(data.label) || '')
        .attr("y", (data) => positionY(data.porcentage.valueOf()))
        .attr("height", (data) => positionY(0) - positionY(data.porcentage))
        .attr("width", positionX.bandwidth())
        .on("mouseover", function (_, data) {
            onMouseOver(this, data)
        })
        .on("mouseout", function () {
            onMouseOut(this)
        });

    useEffect(() => {
        const svgNode = d3.select("#bar-chart").node() as HTMLElement
        const width = svgNode.clientWidth
        const height = svgNode.clientHeight

        const positionX = setXScale(width)
        const positionY = setYScale(height)
        const svg = setSvgDimensions(width, height)

        setXAxis(svg, height, positionX)
        setYAxis(svg, width, positionY)

        addTotalLabel(svg)
        addRectToSvg(svg, positionX, positionY)
    }, [])

    return <svg id="bar-chart" width={'100%'} height={'100%'} />
}

export default BarChart