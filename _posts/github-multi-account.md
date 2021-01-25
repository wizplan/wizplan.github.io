저는 현재 개인 깃허브와 회사의 예제 코드를 관리할 때 필요한 깃허브 계정을 따로 운영하고 있습니다. 근데 작업은 1대의 컴퓨터에서 해야 하므로 불편합니다.

ssh-keygen -t rsa -b 4096 -C "hackingframework@gmail.com" -f "id_rsa_hackframe"

pbcopy < ~/.ssh/id_rsa_hackframe.pub

ssh-add ~/.ssh/id_rsa_hackframe

ssh -T hackingframework


[User]
        name = Scott Lee
        email = hackingframework@gmail.com

[User]
        name = Joongmin Lee
        email = wizplanner@me.com

[User]
        name = Dongyang IT
        email = dybooks.it@gmail.com

git@hackingframework:hackingframework

git@wizplan:wizplan

git@dybooksIT:dybooksIT

# dybooksIT
Host dybooksIT
    HostName github.com
    User git
    IdentityFile ~/.ssh/id_rsa_dybooks

# hackingframework
Host hackingframework
    HostName github.com
    User git
    IdentityFile ~/.ssh/id_rsa_hackframe

# wizplan
Host wizplan
    HostName github.com
    User git
    IdentityFile ~/.ssh/id_rsa_wizplan

[includeIf "gitdir:/Volumes/MBP2018/GitHub/wizplan/"]
         path=~/.ssh/.gitconfig-wizplan

git remote set-url origin git@userA:userA/myproject.git