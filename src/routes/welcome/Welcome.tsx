import { ReactElement } from 'react'
import { Button, Card, Title, Text } from '@gnosis.pm/safe-react-components'
import Divider from '@material-ui/core/Divider'
import styled from 'styled-components'

import Page from 'src/components/layout/Page'
import Block from 'src/components/layout/Block'
import Link from 'src/components/layout/Link'
import { LOAD_SAFE_ROUTE, OPEN_SAFE_ROUTE } from 'src/routes/routes'
import Track from 'src/components/Track'
import { CREATE_SAFE_EVENTS, LOAD_SAFE_EVENTS } from 'src/utils/events/createLoadSafe'

function Welcome(): ReactElement {
  return (
    <Page align="center">
      <Block>
        <Title size="md" strong>
          Welcome to Your Digital Twin Safe.
        </Title>
        <Title size="xs">
          A safe little house for your digital twin. <br />
          Based on the Gnosis Safe, the most trusted platform to manage assets. <br />
          Here is how to get started:
        </Title>
        <CardsContainer>
          <StyledCard>
            {/* Create Safe */}
            <CardContentContainer>
              <Title size="sm" strong withoutMargin>
                Create Safe
              </Title>
              <CardDescriptionContainer>
                <Text size="xl">Create a new Safe that is controlled by one or multiple owners.</Text>
                <Text size="xl">You will be required to pay a network fee for creating your new Safe.</Text>
              </CardDescriptionContainer>
              <Track {...CREATE_SAFE_EVENTS.CREATE_BUTTON}>
                <Button size="lg" color="primary" variant="contained" component={Link} to={OPEN_SAFE_ROUTE}>
                  <Text size="xl" color="white">
                    + Create new Safe
                  </Text>
                </Button>
              </Track>
            </CardContentContainer>
            <Divider orientation="vertical" flexItem />
            <CardContentContainer>
              {/* Load Safe */}
              <Title size="sm" strong withoutMargin>
                Load Existing Safe
              </Title>
              <CardDescriptionContainer>
                <Text size="xl">
                  Already have a Safe or want to access it from a different device? Easily load your Safe using your
                  Safe address.
                </Text>
              </CardDescriptionContainer>
              <Track {...LOAD_SAFE_EVENTS.LOAD_BUTTON}>
                <Button
                  variant="bordered"
                  iconType="safe"
                  iconSize="sm"
                  size="lg"
                  color="secondary"
                  component={Link}
                  to={LOAD_SAFE_ROUTE}
                >
                  <StyledButtonLabel size="xl" color="secondary">
                    Add existing Safe
                  </StyledButtonLabel>
                </Button>
              </Track>
            </CardContentContainer>
          </StyledCard>
        </CardsContainer>
      </Block>
    </Page>
  )
}

export default Welcome

const CardsContainer = styled.div`
  display: flex;
  height: 300px;
  max-width: 850px;
`

const StyledCard = styled(Card)`
  display: flex;
  flex: 0 1 100%;
  padding: 0;
`

const CardContentContainer = styled.div`
  flex: 1 1 50%;
  display: flex;
  flex-direction: column;
  padding: 24px;
  align-items: flex-start;
`

const StyledButtonLabel = styled(Text)`
  min-width: 130px;
`

const CardDescriptionContainer = styled.div`
  margin-top: 16px;
  margin-bottom: auto;
`
