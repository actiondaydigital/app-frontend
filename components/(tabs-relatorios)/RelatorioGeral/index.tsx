import React, { useEffect, useState } from 'react'
import { StyleSheet, View, Text, ScrollView } from 'react-native'
import Card from '@/components/Card';
import ChartBar from '@/components/BarChart';
import MetaCard from '@/components/MetaCard';
import useApiRequest from '@/app/Services/ApiService';
const FirstRoute = () => {
    const [data, setData] = useState<any>(null);
    const [isLoading, setIsLoading] = useState<any>("Loading...");

    useEffect(() => {
        const fetchData = async () => {
            try {
                const fetchedData = await useApiRequest();

                setData(fetchedData);
                setIsLoading(null);
            } catch (error) {
                console.error('Erro ao buscar dados:', error);
                setIsLoading(null);
            }
        };

        fetchData();
    }, [])


    const formatter = new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL'
    })

    return (
        <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>

            {/* Vendas RD e Faturamento Total */}
            <View style={styles.rowContainer}>
                <Card
                    icon="money"
                    name="Vendas RD"
                    value={isLoading ? isLoading : formatter.format(data?.vendas_rd)}
                    iconColor="#9327F0"
                />
                <Card
                    icon="money"
                    name="Faturamento Total"
                    value={isLoading ? isLoading : formatter.format(data?.faturamento_total)}
                    iconColor="#61DE70"
                />
            </View>

            {/* Ticket Medio e Impressoes */}
            <View style={styles.rowContainer}>
                <Card
                    icon="ticket"
                    name="Ticket Médio"
                    value={isLoading ? isLoading : formatter.format(data?.faturamento_total / data?.vendas_rd)}
                    iconColor="#0062FF"
                />

                <Card
                    icon="eye"
                    name="Impressões"
                    value={isLoading ? isLoading : data?.impressoes}
                    iconColor="#00e6fe"
                />
            </View>

            {/* Meta e progresso */}
            <View style={styles.rowContainer}>
                <MetaCard />
            </View>

            {/* Grafico Ticket Medio X Mes */}
            <View style={styles.rowContainer}>
                {isLoading ? (
                    <Text>Loading...</Text>
                ) :
                    <ChartBar
                        title={'Grafico Ticket Medio X Mes'}
                        label={data?.ticket_por_mes.map((item: { DATE: String; }) => item.DATE)}
                        data={data?.ticket_por_mes.map((item: { Faturamento: Number; }) => item.Faturamento)}
                    />
                }

            </View>

            {/* Gráfico Vendas por Mês */}
            <View style={styles.rowContainer}>

                {isLoading ? (
                    <Text>Loading...</Text>
                ) :
                    <ChartBar
                        title={'Vendas Por Mês'}
                        label={data?.vendas_por_mes.map((item: { DATE: String; }) => item.DATE)}
                        data={data?.vendas_por_mes.map((item: { Vendas: Number; }) => item.Vendas)}
                    />
                }

            </View>

        </ScrollView>
    );
};

const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: "#fff",
    },

    rowContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        gap: 12,
        paddingTop: 16,
    },

    graphStyle: {
        marginVertical: 8,
        borderRadius: 16,
    },

});

export default FirstRoute