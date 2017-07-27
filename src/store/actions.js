export default {
	addCount : (store)=>{
			setTimeout(()=>{
			store.commit('ADDCOUNT');
		},1000);
		}
}