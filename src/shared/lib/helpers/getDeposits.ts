export const getDeposits = async (coin:string) => {

   if(coin === 'NEAR') {
      const deposit = await window.contract.get_user_vault({account_id:window.accountId});
      console.log(deposit)
      return (deposit.near_deposit)
   } else {
      const deposit = await window.contractFT(coin).get_user_deposit_by_token({account_id:window.accountId, token:coin});
      console.log(deposit)
      return deposit.available
   }
}