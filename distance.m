x=5:0.001:15;

% Retângulo [(5,A1*5+B3), (9,A2*9+B2), (10,3), (15,7)]
hold on
A1=((7-3)/(15-10));
A2=-A1;
B1=3-A1*10; % reta 1
YR1=A1*x+B1;
B2=7-A2*15; % reta 2
YR2=A2*x+B2;
y=A2*9+B2;
B3=y-A1*9; % reta 3
YR3=A1*x+B3;
y=A1*5+B3; 
B4=3-A2*10; %reta 4
YR4=A2*x+B4;
y=A2*5+B4;
intersecte=(B4-B3)/(A1-A2);

XXR=[x];
YYR=[YR4 YR1 YR3 YR2];
plot([10 15], [3 7], 'Linewidth', 9,'b')
plot([9 15], [A2*9+B2 7], 'Linewidth', 9,'b')
plot([intersecte 9], [A1*(intersecte)+B3 A2*9+B2], 'Linewidth', 9,'b')
plot([intersecte 10], [A2*(intersecte)+B4 3], 'Linewidth', 9,'b')

%plot(x,YR4)
%plot(x,YR3)
%plot(x,YR2)
%plot(x,YR1)

% Cŕiculo
hold on
X=25:0.001:45;
y=((10^2-(X-35).^2).^(0.5))+35;
YC1=y;
YC2=-y+70;
YYC=[YC2 YC1];
XXC=[X];
plot(X,y,'Linewidth', 9, '-k')
plot(X,-y+70,'Linewidth', 9,'-k')
axis([0 60 0 60])


% Código distância
a1=5;
k=1;
while (1)

if(a==10)
break
endif
k=k+1;   
if (a1>=15)
  break
endif  
endwhile  


