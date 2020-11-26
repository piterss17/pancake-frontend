import React from 'react'
import styled from 'styled-components'
import { Heading, Text } from '@pancakeswap-libs/uikit'

export interface PrizeGridProps {
  lotteryPrizeAmount?: number
}

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(4, auto);
`

const RightAlignedText = styled(Text)`
  text-align: right;
`

const RightAlignedHeading = styled(Heading)`
  text-align: right;
`

const GridItem = styled.div<{ marginBottom?: string }>`
  margin-bottom: ${(props) => (props.marginBottom ? props.marginBottom : '10px')};
`

const PrizeGrid: React.FC<PrizeGridProps> = ({ lotteryPrizeAmount = 0 }) => {
  const fourMatchesAmount = +((lotteryPrizeAmount / 100) * 60).toFixed(0)
  const threeMatchesAmount = +((lotteryPrizeAmount / 100) * 20).toFixed(0)
  const twoMatchesAmount = +((lotteryPrizeAmount / 100) * 10).toFixed(0)
  const burnAmount = +((lotteryPrizeAmount / 100) * 10).toFixed(0)

  return (
    <Grid>
      <GridItem>
        <Text fontSize="14px" color="textSubtle">
          No. Matched
        </Text>
      </GridItem>
      <GridItem>
        <RightAlignedText fontSize="14px" color="textSubtle">
          Win Chance
        </RightAlignedText>
      </GridItem>
      <GridItem>
        <RightAlignedText fontSize="14px" color="textSubtle">
          Prize Pot
        </RightAlignedText>
      </GridItem>
      {/* 4 matches row */}
      <GridItem>
        <Heading size="md">4</Heading>
      </GridItem>
      <GridItem>
        <RightAlignedHeading size="md">0.001%</RightAlignedHeading>
      </GridItem>
      <GridItem>
        <RightAlignedHeading size="md">{fourMatchesAmount.toLocaleString()}</RightAlignedHeading>
      </GridItem>
      {/* 3 matches row */}
      <GridItem>
        <Text bold>3</Text>
      </GridItem>
      <GridItem>
        <RightAlignedText>0.36%</RightAlignedText>
      </GridItem>
      <GridItem>
        <RightAlignedText>{threeMatchesAmount.toLocaleString()}</RightAlignedText>
      </GridItem>
      {/* 2 matches row */}
      <GridItem marginBottom="20px">
        <Text>2</Text>
      </GridItem>
      <GridItem marginBottom="20px">
        <RightAlignedText>4.86%</RightAlignedText>
      </GridItem>
      <GridItem marginBottom="20px">
        <RightAlignedText>{twoMatchesAmount.toLocaleString()}</RightAlignedText>
      </GridItem>
      {/* Burn row */}
      <GridItem marginBottom="0">
        <Text>To burn:</Text>
      </GridItem>
      <GridItem marginBottom="0" />
      <GridItem marginBottom="0">
        <RightAlignedText>{burnAmount.toLocaleString()}</RightAlignedText>
      </GridItem>
    </Grid>
  )
}

export default PrizeGrid
