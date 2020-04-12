<%@ Page language="C#"   Inherits="Microsoft.SharePoint.Publishing.PublishingLayoutPage,Microsoft.SharePoint.Publishing,Version=16.0.0.0,Culture=neutral,PublicKeyToken=71e9bce111e9429c" meta:progid="SharePoint.WebPartPage.Document" %>
<%@ Register Tagprefix="SharePointWebControls" Namespace="Microsoft.SharePoint.WebControls" Assembly="Microsoft.SharePoint, Version=16.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c" %> <%@ Register Tagprefix="WebPartPages" Namespace="Microsoft.SharePoint.WebPartPages" Assembly="Microsoft.SharePoint, Version=16.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c" %> <%@ Register Tagprefix="PublishingWebControls" Namespace="Microsoft.SharePoint.Publishing.WebControls" Assembly="Microsoft.SharePoint.Publishing, Version=16.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c" %> <%@ Register Tagprefix="PublishingNavigation" Namespace="Microsoft.SharePoint.Publishing.Navigation" Assembly="Microsoft.SharePoint.Publishing, Version=16.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c" %>
<asp:Content ContentPlaceholderID="PlaceHolderPageTitle" runat="server">
	<SharePointWebControls:FieldValue id="PageTitle" FieldName="Title" runat="server" __designer:Preview="" __designer:Values="&lt;P N=&#39;ID&#39; ID=&#39;1&#39; T=&#39;PageTitle&#39; /&gt;&lt;P N=&#39;FieldName&#39; T=&#39;Title&#39; /&gt;&lt;P N=&#39;ItemFieldValue&#39; ID=&#39;2&#39; Serial=&#39;AAEAAAD/////AQAAAAAAAAAGAQAAABBCbG9nIFBhZ2UgTGF5b3V0Cw&#39; /&gt;&lt;P N=&#39;ListItemFieldValue&#39; R=&#39;2&#39; /&gt;&lt;P N=&#39;Visible&#39; T=&#39;True&#39; /&gt;&lt;P N=&#39;ControlMode&#39; E=&#39;1&#39; /&gt;&lt;P N=&#39;Page&#39; ID=&#39;3&#39; /&gt;&lt;P N=&#39;TemplateControl&#39; R=&#39;3&#39; /&gt;&lt;P N=&#39;AppRelativeTemplateSourceDirectory&#39; R=&#39;-1&#39; /&gt;"/>
</asp:Content>
<asp:Content ContentPlaceholderID="PlaceHolderMain" runat="server">
<WebPartPages:SPProxyWebPartManager runat="server" id="spproxywebpartmanager"></WebPartPages:SPProxyWebPartManager>
	<section style="padding-top:50px;background-color: whitesmoke;">
        <div class="container">
		    <div class="center" style="padding-bottom: 20px;">
            <h2>Health Care Center </h2>
            <p class="lead"></p>
        </div>
            <div class="row">
                <div class="col-sm-8 wow fadeInDown" style="margin-bottom:10px;">
                    <div id="main-slider" class="no-margin" style="border: 1px solid rgb(232, 232, 232);background:white;min-height:300px;">
                        <div class="carousel Cslide slide">
                            <div class="carousel-inner" id="idcar-item">
								<!--fill by JS -->
                                
                            </div><!--/.carousel-inner-->
                        </div><!--/.carousel-->
                        
						<div class="nav-slide" >
                       		<a class="prev hidden-xs" href="#main-slider" data-slide="prev">
                                <i class="fa fa-chevron-left"></i>
                            </a>
                            <a class="next hidden-xs" href="#main-slider" data-slide="next">
                                <i class="fa fa-chevron-right"></i>
                            </a>
						</div>
                    </div><!--/#main-slider-->
                </div><!--/.col-sm-8-->
                
                <div class="col-sm-4 wow fadeInDown">
                    <div style="background-color:#ff7200;;padding-left: 25%;border: 1px solid;height: 45px;line-height: 45px;">
                        <h2 style="margin-top: 10px;color:white;">Quote of The 
						Day</h2>
                    </div>
                    <div class="features" style="height: 255px;border: 1px solid; border-top: 0;margin-bottom:20px;background-color:white;">
                        <div style="padding: 1% 5%;" class="cls-qtd">
                           	
                        </div>
                    </div><!--/.services-->
                </div><!--/.col-sm-6-->
            </div><!--/.row-->
        </div><!--/.container-->
    </section><!--/#content-->
	
    <section id="portfolio">
        <div class="container">
            <ul class="portfolio-filter" style="margin-left:5px;border-bottom:1px solid black;">
                <!--/fill up by JS-->
                <li><a class='btn btn-default active' href='#All' data-filter='*'>All</a></li>
                
				
            </ul><!--/#portfolio-filter-->
			<div class="blog">
                <div class="row">
	                <div class="row portfolio-items">
	                <!--fill up by JS-->
	                   
	                </div>
            	</div>
			</div>
        </div>
    </section><!--/#portfolio-item-->
	<script src="https://qmg.sharepoint.com/SiteAssets/js/blog.js"></script>
</asp:Content>
