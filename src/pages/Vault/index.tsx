import {useEffect, useState} from "react";
import {Heading} from "@chakra-ui/react";
import {
   Table,
   Thead,
   Tbody,
   Tr,
   Th,
   Td,
   TableContainer,
} from '@chakra-ui/react'

const Vault = () => {
   const [user_vault, setsVault] = useState<Record<string, any> | false>(false);
   useEffect(() => {
      async function getVault() {
         const vault = await window.contract.get_user_vault({account_id:window.accountId})
         console.log(vault)
         setsVault(vault)
      }

      getVault()
   }, [])
   return(
      <div style={{marginTop:"150px"}}>
         <Heading textAlign='center' >🏧 Current user Vault 🏧</Heading>

         <TableContainer mt={'40px'}>
            <Table variant='striped' colorScheme='teal'>
               <Thead>
                  <Tr>
                     <Th>Number of NEAR sends</Th>
                     <Th>total NEAR sended</Th>
                     <Th>tokens used</Th>
                     <Th isNumeric>tokens balances</Th>
                  </Tr>
               </Thead>

               <Tbody>
                  {user_vault &&
                     <Tr>
                        <Td>{user_vault?.near_sends_num}</Td>
                        <Td>{user_vault?.total_near_amount_sent}</Td>
                         <Td>{user_vault.tokens_used.map((token:string) => token)}</Td>
                         <Td>{user_vault.token_deposits.map((tokens:string[], index:number) => (
                            <>
                               {user_vault.tokens_used[index]}
                               ({user_vault.token_deposits[index][1]})
                            </>
                         ))}</Td>
                     </Tr>
                  }
               </Tbody>
            </Table>
         </TableContainer>
      </div>
   )
}

export default Vault;