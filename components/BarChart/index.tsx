import React from "react";
import { BarChart } from "react-native-chart-kit";
import { Text, View, StyleSheet, Dimensions } from "react-native";

const ChartBar = (props: any) => {
    const { label, data, title } = props;

    const windowWidth = Dimensions.get('window').width - 38;

    const chartData = {
        labels: label || "",
        datasets: [
            {
                data: data || [],
            },
        ],
    };

    return (
        <View style={styles.chartContainer}>
            <BarChart
                data={chartData}
                chartConfig={{
                    backgroundColor: '#262450',
                    backgroundGradientFrom: '#262450',
                    backgroundGradientTo: '#262450',
                    color: () => "#00D7FF",
                    labelColor: () => "#fff",
                }}
                width={windowWidth}
                height={220}
                withInnerLines={false}
                showValuesOnTopOfBars={true}
                withHorizontalLabels={true}
                yAxisLabel=""
                yAxisSuffix=""
                style={{
                    borderRadius: 18,
                    paddingTop: 12,
                }}
            />
            <Text style={styles.chartTitle}>{title}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    chartContainer: {
        position: 'relative',
        backgroundColor: '#262450',
        paddingTop: 52,
        borderRadius: 18,
        marginBottom: 10
    },
    chartTitle: {
        fontSize: 22,
        color: '#fff', 
        position: 'absolute',
        top: 8, 
        left: 10, 
    },
});

export default ChartBar;
