import React from 'react';
import { Grid, Table } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';

const AnalyzeTable = (props) => {
  const numSoldBananas = props.soldBananas ?  props.soldBananas.length : 0;
  const numExBananas = props.expiredBananas ? props.expiredBananas.length : 0;
  const numUnExBananas = props.unExBananas ? props.unExBananas.length : 0;
  return (
  <div>
    <Grid>
      <Grid.Row centered columns={6}>
        <Grid.Column>
          <Table singleLine>
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell>Description</Table.HeaderCell>
                <Table.HeaderCell>Total</Table.HeaderCell>
                <Table.HeaderCell>Value</Table.HeaderCell>
              </Table.Row>
            </Table.Header>
            <Table.Body>
              <Table.Row>
                <Table.Cell>Remaining unexpired bananas in inventory</Table.Cell>
                <Table.Cell>{numUnExBananas}</Table.Cell>
                <Table.Cell >${Math.round(numUnExBananas * .20)}</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>Number of expired bananas to date</Table.Cell>
                <Table.Cell>{numExBananas}</Table.Cell>
                <Table.Cell>${numExBananas * .20}</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>Number of bananas sold to date</Table.Cell>
                <Table.Cell>{numSoldBananas}</Table.Cell>
                <Table.Cell>${numSoldBananas * .35}</Table.Cell>
              </Table.Row>
            </Table.Body>
          </Table>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  </div>
  )
}

export default AnalyzeTable;
