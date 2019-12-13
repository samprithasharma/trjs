<script language="JavaScript">
function sum()
{
    var ans=0
    var len=sum.arguments.length
    for(i=0;i<len;i++)
    {
        ans+=sum.arguments[i]
    }
    document.write("the sum is"+ans)
}
sum(10,20)
sum(10,20,30,40)
</script>
